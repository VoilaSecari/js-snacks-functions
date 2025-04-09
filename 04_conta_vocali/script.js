/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const countVowels = (text) => {
  let numberOfVowels = 0;
  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i][0].toLowerCase();
    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
