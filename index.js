const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
	event.preventDefault(); // Evita que o formulário seja enviado automaticamente

	const fieldA = Number(document.getElementById("fieldA").value);
	const fieldB = Number(document.getElementById("fieldB").value);

	if (fieldB > fieldA) {
		alert("Formulário válido!");
	} else {
		alert("Formulário inválido!");
	}
});