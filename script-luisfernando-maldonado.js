document.querySelector("form")?.addEventListener("submit", event => {
	event.preventDefault();

	var edad = encodeURIComponent(document.getElementById("edad")?.value);
	var sexo = encodeURIComponent(document.getElementById("sexo")?.value);
	var edu = encodeURIComponent(document.getElementById("edu")?.value);
	var ocu = encodeURIComponent(document.getElementById("ocu")?.value);

	var url = `resultado-luisfernando-maldonado.html?edad=${edad}&sexo=${sexo}&edu=${edu}&ocu=${ocu}`;

	location.href = url;
});
