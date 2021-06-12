
setTimeout(() => {
	var modal = document.querySelector(".modal");
	var container = modal.querySelector(".container");

	document.querySelector("#calcular").addEventListener("click", function (e) {
		if (localStorage.getItem('tipo') == 'erro') {
			var var1 = parseInt(document.querySelector("#erro1").value);
			var var2 = parseInt(document.querySelector("#erro2").value);
			var var3 = parseInt(document.querySelector("#erro3").value);
			var var4 = parseInt(document.querySelector("#erro4").value);
			var var5 = parseInt(document.querySelector("#erro5").value);
		} else {
			var var1 = parseInt(document.querySelector("#melhoria1").value);
			var var2 = parseInt(document.querySelector("#melhoria2").value);
			var var3 = parseInt(document.querySelector("#melhoria3").value);
			var var4 = parseInt(document.querySelector("#melhoria4").value);
			var var5 = parseInt(document.querySelector("#melhoria5").value);
		}
		document.querySelector("#resultado").innerText = var1 * var2 * var3 * var4 * var5;
		modal.classList.remove("hidden")
	});

	document.querySelector(".modal").addEventListener("click", function (e) {
		if (e.target !== modal && e.target !== container) return;
		modal.classList.add("hidden");
	});


}, 1000)

