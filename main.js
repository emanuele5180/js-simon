// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


$(document).ready(function(){


  var numeriCasuali = [];

  //alert
  console.log(numeriCasuali.length);

  while (numeriCasuali.length<= 4 ) {
    var numeri = getRandomIntInclusive(1,20);
    console.log(numeri);

    if (controllo(numeri,numeriCasuali)== false) {
      alert(numeri);
      numeriCasuali.push(numeri);

    }



  }
  console.log(numeriCasuali);

  //timer di 30 secondi

  function timer(){
    console.log('timer Called')
  }

  timer(numeriInseriti());

  setTimeout(function(){
    timer()
  }, 30000)


  //inserisci i numeri





  //setTimeout(timer,)



})


//funzioni
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - 1 + min)) + min; //Il max è incluso e il min è incluso
}

function controllo(val,array) {
  for (var i = 0; i < array.length; i++) {



    if (array[i]== val) {

      return true;

    }


  }
  return false;
}

function numeriInseriti() {
  for (var i = 0; i < 5; i++) {
    var numeriUtente = parseInt(prompt('inserisci i numeri'));
    console.log(numeriUtente);
  }
}
