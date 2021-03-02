/*L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.*/

var numero1 = parseInt(prompt ("inserisci un numero"));

var numero2 = parseInt(prompt ("inserisci un numero"));



if ( numero1 > numero2) {
  console.log("il numero 1 è maggiore del numero 2");
} else {
  console.log("il numero 2 è maggiore del numero 1");
} else if ( numero1 == numero2) {
  console.log("i numeri sono uguali");
}
