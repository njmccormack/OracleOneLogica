var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
  event.target.parentNode.classList.add("fadeout");
  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500);
  //equivalent of
  //var alvoEvento = event.target;//td
  //var paiDoAlvo = alvoEvento.parentNode;// tr = paciente = reomever
  //paiDoAlvo.remove();
});


//pacientes.forEach(function(paciente) {
//    paciente.addEventListener("dblclick", function() {
//        this.remove();
//    });
//});
