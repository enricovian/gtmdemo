

async function logHttpBin() {
	urlParams = new URLSearchParams(window.location.search);
	paramsString = Array.from(urlParams.keys()).map( function(key){ return key+"="+urlParams.get(key) }).join("&")
	await fetch("https://httpbin.org/get?" + paramsString)
		.then((response) => response.json())
		.then((json) => console.log(json))
}
