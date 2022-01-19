const intervalo = setInterval(() => {	

	// Pega o horário atual
	const now = new Date();

	// Ângulo do ponteiro das horas
	const angHora = now.getHours() * 30
	// Ângulo do ponteiro dos minutos
	const angMinuto = now.getMinutes() * 6
	// Ângulo do ponteiro dos segundos
	const angSegundo = now.getSeconds() * 6

	// Conversão para o relógio dos segundos
	var ponteiroSegundo = document.getElementById("ponteiro-segundo");

	ponteiroSegundo.style.webkitTransform = "rotate("+ angSegundo + "deg)";



	// Função para o ponteiro da hora se mover conforme os minutos
	function angHoraa() {
		return angHora + (now.getMinutes() / 2);
	}

	// Função para o ângulo não passar de 360º
	function angHorab() {
	if (angHoraa() == 360) {
		return 0;
	} else { 
		if (angHoraa() > 360) {
			return angHoraa() - 360;
		} 
	}
	}

	// Conversão para o relógio das horas
	var ponteiroHora = document.getElementById("ponteiro-hora");

	ponteiroHora.style.webkitTransform = "rotate("+ angHorab() + "deg)";


	// Conversão para o relógio dos minutos
	var ponteiroMinuto = document.getElementById("ponteiro-minuto");

	ponteiroMinuto.style.webkitTransform = "rotate("+ angMinuto + "deg)";

},1000);