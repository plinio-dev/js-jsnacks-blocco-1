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
