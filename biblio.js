async function convertBiblio(config, _, utils) {
  const bibResponse = await fetch("citations.bib");
  const bibContent = bibResponse.status < 400 ? await bibResponse.text() : "";
  if (!bibContent.trim()) {
    utils.showWarning("Unable to retrieve BibTeX data; skipping citations processing.");
    return;
  }

  const Cite = require("citation-js");
  const cite = await Cite.async(bibContent).catch((error) => {
    utils.showError("Error parsing citations", { details: error.message });
    return null;
  });
  if (!cite) return;

  const htmlMap = {};
  cite
    .format("bibliography", {
      template: "APA",
      lang: "en-US",
      format: "html",
      hyperlinks: true,
      asEntryArray: true,
      nosort: true,
      // Add distinct tokens to easily extract content from surrounding div
      prepend: "__BEGIN__",
      append: "__END__",
    })
    .forEach(([id, html], i) => {
      const { title, URL } = cite.data[i];
      // TODO: citeproc-js uses <i> for journal/volume; do we want to replace/remove?
      let replacedHtml = html
        .replace(/^.*__BEGIN__/, "")
        .replace(/__END__[\s\S]*$/, "")
        .replace(/<a href/, "URL: <a href")
        // Add <cite> and link around title to match standard ReSpec behavior
        .replace(title, `<cite>${URL ? `<a href="${URL}">` : ""}${title}${URL ? "</a>" : ""}</cite>`);
      htmlMap[id] = replacedHtml;
    });

  // Populate localBiblio enough for ReSpec to populate dl; contents of each dd will be replaced
  config.localBiblio = {};
  for (const entry of cite.data) {
    config.localBiblio[entry.id] = {
      href: entry.URL,
      title: entry.title,
      // Allow access to preferred HTML representation in postProcess
      toString: () => htmlMap[entry.id],
    };
  }
}

function renderBiblio(config, _, utils) {
  for (const [id, entry] of Object.entries(config.localBiblio)) {
    const dd = document.querySelector(`dt#bib-${id.toLowerCase()} + dd`);
    if (dd) dd.innerHTML = entry.toString();
  }
}
