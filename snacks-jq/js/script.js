/*
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore

// 1 creare un array di oggetti Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.


var biciclette = [
  {
  'nome' : 'atala',
  'peso' : '6000',
  },
  {
  'nome' : 'bottecchia',
  'peso' : '5000',
  },
  {
  'nome' : 'rider',
  'peso' : '8000',
  },

];


// 2 Stampare a schermo la bici con peso minore
var biciLeggera = biciclette[0];

for (var i = 0; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera[0]) {
    biciLeggera = biciclette[i];
  }

}
console.log(biciLeggera);

*/

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// 3 step:
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// 1 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

var squadre = [
  {
  'nome' : 'Roma',
  'pFatti' : 0,
  'fSubiti': 0
  },
  {
  'nome' : 'Spal',
  'pFatti' : 0,
  'fSubiti': 0
  },
  {
  'nome' : 'Varese',
  'pFatti' : 0,
  'fSubiti': 0
  },
  {
  'nome' : 'Benevento',
  'pFatti' : 0,
  'fSubiti': 0
  },
];


// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.

function getRandom(min,max) {
  return Math.floor(Math.random()*(max - min +1))+ min;
}

for (var key in squadre) {
  squadre[key].pFatti = getRandom(1,30);
  squadre[key].fSubiti = getRandom(1,30);

  console.log(squadre[key]);
}

// 3 step:
// // Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
var array2 =[];

for (var key in squadre) {
  delete squadre[key].nome;
  array2.push(squadre[key]);
}


console.log(squadre);
