/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let animal of pets){
  console.log(animal);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
let orderedPets = pets.sort();
console.log(orderedPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let reversedPets = pets.reverse();
console.log(reversedPets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let firstPet = pets.shift();
pets.push(firstPet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let index = 0; index < cars.length; index++) {
  let plate = "AA123B" + index
  cars[index].licensePlate = plate
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({brand: "FIAT", model: "Punto", color: "white", trims: ['grande'], licensePlate: "AA123B4"})
for (let car of cars) {
  car.trims.pop()  
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let car of cars) {
  justTrims.push(car.trims.shift())
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let car of cars) {
  if (car.color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (numericArray[i] !== 32 ) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabetIta = "abcdefghilmnopqrstuvz"
splittedAlphabet = alphabetIta.split("")
for (let index = 0; index < splittedAlphabet.length; index++) {
  splittedAlphabet[index] = {character : splittedAlphabet[index], position: index}
}

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      charactersArray[i] = 1
      break;
    case "b":
      charactersArray[i] = 2
      break;
    case "c":
      charactersArray[i] = 3
      break;
    case "d":
      charactersArray[i] = 4
      break;
    case "e":
      charactersArray[i] = 5
      break;
    case "f":
      charactersArray[i] = 6
      break;
    case "g":
      charactersArray[i] = 7
      break;
    case "h":
      charactersArray[i] = 8
      break;
    case "i":
      charactersArray[i] = 9
      break;
    case "l":
      charactersArray[i] = 10
      break;
    case "m":
      charactersArray[i] = 11
      break;
    case "n":
      charactersArray[i] = 12
      break;
    case "o":
      charactersArray[i] = 13
      break;
    case "p":
      charactersArray[i] = 14
      break;
    case "q":
      charactersArray[i] = 15
      break;
    case "r":
      charactersArray[i] = 16
      break;
    case "s":
      charactersArray[i] = 17
      break;
    case "t":
      charactersArray[i] = 18
      break;
    case "u":
      charactersArray[i] = 19
      break;
    case "v":
      charactersArray[i] = 20
      break;
    case "z":
      charactersArray[i] = 21
      break;
  }
}
console.log(charactersArray);