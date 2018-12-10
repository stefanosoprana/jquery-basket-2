// Basket 2
// Il software deve generare casualmente le statistiche di gioco di
// 100 giocatori di basket per una stagione.
// In particolare vanno generate per ogni giocatore le seguenti
// informazioni, facendo attenzione che il numero generato abbia
// senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti
// Una volta generato il “database”, il programma deve chiedere
// all’utente di inserire un Codice Giocatore e il programma
// restituisce le statistiche.


$(document).ready(function(){

  // FUNCTIONS

  function randomNumber(max,min) {

    var numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);

    return numeroRandom;

  }

  function randomItem(myArray) {

    var randomElement = myArray[Math.floor(Math.random()*myArray.length)];

    return randomElement;
  }

  function randomLetter() {

    var letter = 'abcdefghijklmnopqrstuvwxyz';

    var letterUp = letter.toUpperCase();

    var arrayLetter = letterUp.split('');

    var codeLetterRandom = randomItem(arrayLetter);

    return codeLetterRandom;

  };

  // LISTA GIOCATORI

  var playerNba = [];

  for (var i = 0; i < 100 ; i++) {

  // VALORI RANDOM

    var codeNumberRandom = randomNumber(999,100);
    var ReboundsRandom = randomNumber(20,0);
    var PersonalFoulsRandom = randomNumber(9,0);
    var Tirida2 = randomNumber(30,20);
    var Puntida2 = (randomNumber(10,0)) * 2;
    var Tirida3 = randomNumber(25,18);
    var Puntida3 = (randomNumber(6,0)) * 3;
    var PointsRandom = Puntida2 + Puntida3;
    var ThrowsRandom = Tirida2 + Tirida3;
    var PercentualeSuccessiTirida2 = ((Puntida2/Tirida2) * 100).toFixed(2);
    var PercentualeSuccessiTirida3 = ((Puntida3/Tirida3) * 100).toFixed(2);

  // LISTA OGGETTI

    playerNba.push(
      {
        CodePlayer: randomLetter() + randomLetter() + randomLetter() + codeNumberRandom,
        Points: PointsRandom,
        Throws: ThrowsRandom,
        Rebounds: ReboundsRandom,
        PersonalFouls: PersonalFoulsRandom,
        Puntida2Effettuati: Puntida2,
        Tirida2Effettuati: Tirida2,
        PercentualeTirida2: PercentualeSuccessiTirida2,
        Puntida3Effettuati: Puntida3,
        Tirida3Effettuati: Tirida3,
        PercentualeTirida3: PercentualeSuccessiTirida3,
      },
    );
  };



  for (var i = 0; i < playerNba.length; i++) {
    var listaGiocatori = playerNba[i].CodePlayer

    console.log(listaGiocatori);

    var listItem = $('.template .listItem').clone()

    $(listItem).append(listaGiocatori)

    $('.sidebar').append(listItem)



    var stats = $('.template .stats').clone()

    var item = $(stats).children('.item').append()

    $(item).children('.player').append(playerNba[i].CodePlayer)
    $(item).children('.punti').append(playerNba[i].Points)
    $(item).children('.rimbalzi').append(playerNba[i].Rebounds)
    $(item).children('.falli').append(playerNba[i].PersonalFouls)
    $(item).children('.percentualetirida2').append(playerNba[i].PercentualeTirida2)
    $(item).children('.percentualetirida3').append(playerNba[i].PercentualeTirida3)

    $('.main').append(stats)

  }

  $('.listItem').click(function(){

    $('.listItem').removeClass('active')

    $(this).addClass('active')

    $('.stats').removeClass('active');

    var numerogiocatore = $(this).index();

    $('.stats').eq(numerogiocatore).addClass('active');

  });

});
