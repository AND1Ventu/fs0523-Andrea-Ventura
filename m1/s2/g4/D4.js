/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
    return l1 * l2
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(int1, int2) {
    let sum = int1 + int2
    if (sum) {
        return ( sum ) * 3
    }
    return (sum)
}


function crezySUm(int1, int2) {
    let sum = int1 + int2;
    return int1 === int2 ? sum*3 : sum;
}


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    let diffAbs = Math.abs(numero - 19);
    if ( numero > 19 ) {
        return ( diffAbs) * 3;
    } else {
        return (diffAbs);
    }
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso)
  oppure se n è uguale a 400.
*/

function boundary(n) {
    return ((20 <= n <= 100) || (n === 400))
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(inputString) {
    if (inputString.startsWith("EPICODE")) {
      return inputString;
    } else {
      return "EPICODE " + inputString;
    }
  }
  
  // Esempi di utilizzo:
  console.log(epify("Hello, world!")); 
  console.log(epify("EPICODE JavaScript")); 


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numPos) {
    if (numPos % 3 === 0) {
        if (numPos % 7 === 0) {
            return "Multiplo di 3 e 7"
        } else {
            return "Multiplo di 3"  
        }
    } else if (numPos % 7 === 0){
        return "Multiplo di 7"
    } else {
        return "No multiplo di 3 o 7"
    }
}

let numPos;
do {
    numPos = prompt('Inserisci un numero positivo: ')
} while (numPos < 0);
result = check3and7(numPos)
console.log(result)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* split, reverse, join */

function reverseString(string) {
    let reversed = string.split("").reverse().join("")
    return reversed
}

let stringa = prompt('Inserire una stringa: ')
stringaVisuale = reverseString(stringa)
console.log(stringaVisuale);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
    let result = []
    for (const word of string) {
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    return result
}

do {
    let stringa = prompt('Inserire una stringa di diverse parole: ')
    check = stringa.split(" ")

} while (check.lenght === 1);
let upperString = upperFirst(check);
console.log(upperString);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa 
 senza il primo e l'ultimo carattere della stringa originale.
*/

function cutString(string) {
    let cutted = string.slice(1, string.lenght-1)
    return cutted 
}

cutted = cutString(prompt('Inserisci una stringa da tagliare: '))
console.log(cutted);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e
  ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    var randomNumbers = [];
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNumber)
    }
    return randomNumbers
}

let numerosita;
do {
    numerosita = prompt('Inserire numerosità: ')

} while (numerosita <= 0 );

let randomNumbers = giveMeRandom(numerosita);