/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
const filterByInitial = (list, filterChar) => {
  const filteredList = [];
  for (const currentElement of list) {
    const firstChar = currentElement[0];

    if (firstChar === filterChar) filteredList.push(currentElement);
  }
  return filteredList;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByInitial(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
