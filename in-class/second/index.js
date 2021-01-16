fetch("/first/index.js")
	.then((response) => response.text())
	.then((text) => alert(text));
