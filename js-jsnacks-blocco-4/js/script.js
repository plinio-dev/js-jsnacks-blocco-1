/* In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */


var listaFesta = ["Luca", "Andrea", "Maria", "Marco", "Matteo"];

var nomeUtente = prompt("Inserisci il tuo nome");


var iscritto = false;
for (var j=0; j < listaFesta.length; j++) {
  if (nomeUtente == listaFesta[j]) {
    iscritto = true;
  }
}

if ( iscritto)
  alert("sei iscritto alla festa")
  else {
  alert("non sei iscritto");
}
