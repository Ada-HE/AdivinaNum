
var numeroAleatorio2, numeroIngresado;

function adivinarNumero() {
  var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  numeroAleatorio2 = numeroAleatorio;}

  function ingresaNum() {
  numeroIngresado = Number.parseInt(prompt('Ingresa un número entero:'))}

    function Respuesta(){
    numeroAleatorio2
      if (numeroIngresado == numeroAleatorio2) {
        alert('¡Felicitaciones, le atinaste!');
      } else if (numeroIngresado < numeroAleatorio2) {
        alert('Muy bajo. Intenta nuevamente.');
      } else {
        alert('Muy alto. Intenta nuevamente.');
      }
    }

function ver() {
  alert("El número es: " + numeroAleatorio2);
}

var contador = 0
var btnclic = document.getElementById("btnclic");
var contadorelementos = document.getElementById("contador");

btnclic.addEventListener("click", function() {
    contador++;
    contadorelementos.innerHTML = contador;
});







