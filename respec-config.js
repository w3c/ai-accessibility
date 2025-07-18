var respecConfig = {
	// embed RDFa data in the output
	trace: true,
	useExperimentalStyles: true,
	doRDFa: '1.1',
	includePermalinks: true,
	permalinkEdge: true,
	permalinkHide: false,
	noRecTrack: true,
	tocIntroductory: true,
	lint: { "no-unused-dfns": false },
	// specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
	specStatus: "ED",
	//crEnd:                "",
	//perEnd:               "",
	diffTool: "http://www.aptest.com/standards/htmldiff/htmldiff.pl",

	// the specifications short name, as in https://www.w3.org/TR/short-name/
	shortName: "ai-accessibility",


	// if you wish the publication date to be other than today, set this
	//publishDate:  "2014-12-11",
	copyrightStart: "2024",
	license: "w3c-software-doc",

	// if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
	// and its maturity status
	// previousPublishDate:  "2005-11-23",
	// previousMaturity:  "NOTE",
	//prevRecURI: "",
	//previousDiffURI: "",

	// if there a publicly available Editors Draft, this is the link
	// edDraftURI: "https://w3c.github.io/apa/caur/",

	// if this is a LCWD, uncomment and set the end of its review period
	// lcEnd: "2012-02-21",

	// editors, add as many as you like
	// only "name" is required
	editors: [
        {
			name: "Scott Hollier",
			mailto: "scott.hollier@accessibility.org.au",
			company: "Centre for Accessibility Australia",
			companyURI: "https://www.accessibility.org.au/",
			w3cid: 43274
		},

		{
			name: "Jason White",
			mailto: "jason@jasonjgw.net",
			w3cid: 74028
		},
		{
			name: "Janina Sajka",
			url: "http://rednote.net/",
			w3cid: 33688
		},
    {
			name: "Joshue O'Connor",
			mailto: "josh@interaccess.ie",
			w3cid: 41218,
			url: "https://interaccess.ie",
		},
	],

	// authors, add as many as you like.
	// This is optional, uncomment if you have authors as well as editors.
	// only "name" is required. Same format as editors.

	//authors:  [
	//    { name: "Your Name", url: "http://example.org/",
	//      company: "Your Company", companyURI: "http://example.com/" },
	//],

	/*
	alternateFormats: [
		{ uri: 'wcag21-diff.html', label: "Diff from Previous Recommendation" } ,
		{ uri: 'wcag21.ps', label: "PostScript version" },
		{ uri: 'wcag21.pdf', label: "PDF version" }
	],
	*/

	// errata: 'https://www.w3.org/2010/02/rdfa/errata.html',

	group: "apa",
	github: "w3c/ai-accessibility",
	maxTocLevel: 4,
	preProcess: [convertBiblio],
	postProcess: [renderBiblio],
};
