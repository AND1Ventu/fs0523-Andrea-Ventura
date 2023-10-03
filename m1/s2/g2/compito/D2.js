/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/*
let number1 = 100;
let number2 = 10;

if (number1 > number2){
  console.log("The larger number is " + number1)
} else if (number2 > number1) {
  console.log("The larger number is " + number2)
} else {
  console.log("The numbers are equals")
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  let input_n = prompt("Insert a number: ");
  let number1 = parseInt(input_n);
  
  if (typeof number1 === 'number'){
    if (number1 !== 5) {
      console.log("not equal")
    }
  }
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  let input_n = prompt("Insert a number: ");
  let number1 = parseInt(input_n);
  
  if (typeof number1 === 'number'){
    if (number1 % 5 === 0) {
      console.log("divisibile per 5")
    } else {
      console.log('non divisibile per 5');
    }
  }
*/


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure
   se la loro addizione/sottrazione sia uguale a 8.
   
   let input1 = prompt("Inserire un numero intero: ");
   let number1 = parseInt(input1);
   let input2 = prompt("Inserire un numero intero: ");
   let number2 = parseInt(input2);
   
   if (typeof number1 !== 'number' || typeof number2 !== 'number') {
     console.log("Non sono due numeri interi");
    } else {
      if (number1 === 8) {
        console.log('number1 è uguale a 8');
      } else if (number2 === 8) {
        console.log('number2 è uguale a 8');
      } else if (number1 + number2 === 8) {
        console.log('la somma è uguale a 8');
      } else if (number1 - number2 === 8) {
        console.log('la differenza è uguale a 8');
      } else if (number2 - number1 === 8) {
        console.log('la differenza è uguale a 8');
      } else {
        console.log('non vi sono relazioni con il numero 8');
      }
    }
*/
    
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  
  let totalShoppingCart;
  if (totalShoppingCart < 50) {
    totalShoppingCart += 10;
  }
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
  let totalShoppingCart;
  
  totalShoppingCart -= (totalShoppingCart % 100 * 20)
  if (totalShoppingCart < 50) {
    totalShoppingCart += 10;
  }
*/


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  let var1 = prompt("Inserisci un valore numerico: ");
  let number1 = parseInt(var1);
  let var2 = prompt("Inserisci un valore numerico: ");
  let number2 = parseInt(var2);
  let var3 = prompt("Inserisci un valore numerico: ");
  let number3 = parseInt(var3);
  
  if (number1 >= number2 && number1 >= number3) {
    if (number2 >= number3) {
      console.log("Ordine decrescente: " + number1 + ", " + number2 + ", " + number3);
    } else {
      console.log("Ordine decrescente: " + number1 + ", " + number3 + ", " + number2);
    }
  } else if (number2 >= number1 && number2 >= number3) {
    if (number1 >= number3) {
      console.log("Ordine decrescente: " + number2 + ", " + number1 + ", " + number3);
    } else {
      console.log("Ordine decrescente: " + number2 + ", " + number3 + ", " + number1);
    }
  } else {
    if (number1 >= number2) {
      console.log("Ordine decrescente: " + number3 + ", " + number1 + ", " + number2);
    } else {
      console.log("Ordine decrescente: " + number3 + ", " + number2 + ", " + number1);
    }
  }
*/
  

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  
  let input_n = prompt("Insert a number: ");
  let number1 = parseInt(input_n);
  
  if (typeof number1 === 'number'){
    console.log("numero")
  } else {
    console.log('non numero');
  }
*/
  
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)

let input_n = prompt("Insert a number: ");
let number1 = parseInt(input_n);

if (typeof number1 === 'number'){
  if (number1 % 2 === 0) {
    console.log("numero pari")
} else {
  console.log('numero dispari');
}
*/


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
*/


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".

delete me.lastName;
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".

me.skills.pop();
*/


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.

let array;
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
*/

/* 
for (let i = 1; i <= 10; i++) {
  array.push(i);
}
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.

array[ array.lenght - 1] = 100;
  */

