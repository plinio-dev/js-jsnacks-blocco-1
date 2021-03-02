/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array. */


var lista  = [ ];


for ( var i=0; i <6; i++) {
  var numeroUtente = parseInt(prompt (" inserisci un numero"));
  if (!isNaN(numeroUtente) && numeroUtente % 2 == 1) {
    lista.push (numeroUtente)
  }

}
console.log(lista);
