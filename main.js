// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


$(document).ready(function(){

  var numeri = alert(getRandomIntInclusive());
  var numeriCasuali = [numeri];
  console.log(numeriCasuali);

  //alert
  for (var i = 1; i < 5; i++) {
    alert(getRandomIntInclusive());

  }

  //timer di 30 secondi

  function timer(){
    console.log('timer Called')
  }

  timer();

  setTimeout(function(){
    timer()
  }, 30000)


  //inserisci i numeri



  for (var i = 0; i < 5; i++) {
    var numeriUtente = parseInt(prompt('inserisci i numeri'));
    console.log(numeriUtente);
  }



  //setTimeout(timer,)




})




//funzioni

function getRandomIntInclusive(min, max) {
  min = Math.ceil(1);
  max = Math.floor(20);
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1; //Il max è incluso e il min è incluso
}
