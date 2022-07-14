let ingresarNumero = parseInt(
  prompt("Bienvenido al portal. ¿ Qué numero queres aprender a dividir?")
);

for (i = 1; i <= 10; i++) {
  let resultado = ingresarNumero / i;
  alert("Al dividir " + ingresarNumero + "/" + i + "=" + resultado);
}

alert("Aprendiste a dividir " + ingresarNumero + " del 1 al 10");
