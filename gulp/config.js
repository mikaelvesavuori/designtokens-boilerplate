module.exports = {
	theo: {
		src: "designtokens/**/*.json",
		dest: "export/",
		transformType: "web",
		formatType: "common.js" // common.js, sass, scss, map.scss, map.variables.css, json (doesn't work?)
	}
};
