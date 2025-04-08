/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function initialsList(listName) {
  const namesInitials = [];
  for (let i = 0; i < listName.length; i++) {
    const currentInitial = listName[i];
    namesInitials.push(currentInitial[0]);
  }

  return namesInitials;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(initialsList(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
