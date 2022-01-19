function Time() {

// Creating object of the Date class
var date = new Date();
// Get current hora
var hora = date.getHours();
// Get current minute
var min = date.getMinutes();

if (hora == 0) {
hora = 12;
} else {
if (hora > 12) {
hora = hora - 12;
}
}


hora = update(hora);
min = update(min);

document.getElementById("digital-clock").innerText = hora + " : " + min;

setTimeout(Time, 1000);
}

function update