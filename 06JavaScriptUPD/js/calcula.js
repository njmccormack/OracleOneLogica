var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
//var pacientes = document.querySelector(".paciente"); //SÓ um elemento
var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for(i = 0; i < pacientes.length ; i++){

  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector('.info-peso');
  var tdAltura = paciente.querySelector('.info-altura');
  var tdImc = paciente.querySelector('.info-imc');

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
   console.log("Altura inválida!");
   alturaEhValida = false;
   tdImc.textContent = "Altura inválida!";
   paciente.classList.add("paciente-invalido");
 }

  if (alturaEhValida && pesoEhValido){
      var imc = calculaImc(peso,altura);
      tdImc.textContent = imc;
  }

}

  function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
  }

  function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
  }

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

//...
//event com função anonima
titulo.addEventListener("click", function(){
  console.log("fui clicado");
});

// com função nomeada
//titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
  console.log("fui clicado")
}

//console.log(85/(1.77*1.77))
