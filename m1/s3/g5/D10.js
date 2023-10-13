/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: 
  name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
me = {
  name: "Andrea",
  surname: "Ventura",
  age: 30
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", 
  contenente i linguaggi di programmazione che conosci.
*/
me.skills = ['python', 'javascript']

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("MySQL")

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let random = Math.floor(Math.random() * 6) + 1
}


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1
  } else if (numero2 > numero1) {
    return numero2       
  } else {
    console.log("i numeri sono uguali");
    return numero1
  }
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(stringa) {
  let parole = stringa.split(' ');
  return parole;
}

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, 
  altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, booleano) {
  if (booleano === true) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e 
  la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  const soloLettere = stringa.replace(/\d/g, '');
  return soloLettere;
}

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e 
  ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const oggi = new Date();
  const giornoCorrente = oggi.getDay();

  return giorniSettimana[giornoCorrente];
}

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, 
  e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", 
  contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numero) {
  let sum = 0;
  const values = [];

  for (let i = 0; i < numero; i++) {
    const result = dice();
    values.push(result);
    sum += result;
  }

  return {
    sum: sum,
    values: values
  };
}

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const inputDate = document.createElement("input");
inputDate.type = "date";
inputDate.id = "dataInput";
document.body.appendChild(inputDate);

function howManyDays(dataIniziale) {
  const dataInizialeDate = new Date(dataIniziale);
  const dataCorrente = new Date();
  const differenzaInMillisecondi = dataCorrente - dataInizialeDate;
  const millisecondiInUnGiorno = 1000 * 60 * 60 * 24;
  const giorniTrascorsi = Math.floor(differenzaInMillisecondi / millisecondiInUnGiorno);
  return giorniTrascorsi;
}

inputDate.addEventListener("change", function() {
  const dataSelezionata = inputDate.value;
  const giorniTrascorsi = howManyDays(dataSelezionata);
  return giorniTrascorsi;
});

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const inputCompleanno = document.createElement("input");
inputCompleanno.type = "date";
inputCompleanno.id = "compleannoInput";
document.body.appendChild(inputCompleanno);

function isTodayMyBirthday(compleanno) {
  const dataOggi = new Date();
  const dataCompleanno = new Date(compleanno);

  return (
    dataOggi.getMonth() === dataCompleanno.getMonth() &&
    dataOggi.getDate() === dataCompleanno.getDate()
  );
}

inputCompleanno.addEventListener("change", function() {
  const dataCompleanno = inputCompleanno.value;
  const isCompleannoOggi = isTodayMyBirthday(dataCompleanno);

  if (isCompleannoOggi) {
    console.log("Oggi è il tuo compleanno!");
  } else {
    console.log("Oggi non è il tuo compleanno.");
  }
});

// Arrays & Oggetti
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const selectContainer = document.createElement("div");
selectContainer.id = "selectContainer";
const selectElement = document.createElement("select");
const initialOption = document.createElement("option");
initialOption.text = "Proprietà da eliminare";
selectElement.appendChild(initialOption);
const uniqueProperties = new Set();

selectElement.addEventListener("change", function () {
  const selectedProperty = selectElement.value;
  deleteProp(movies[0], selectedProperty);
  console.log("Proprietà eliminata: " + selectedProperty);
});

movies.forEach((movie) => {
  for (const key in movie) {
    if (movie.hasOwnProperty(key) && !uniqueProperties.has(key)) {
      const option = document.createElement("option");
      option.value = key;
      option.text = key;
      selectElement.appendChild(option);
      uniqueProperties.add(key);
    }
  }
});

selectContainer.appendChild(selectElement);
document.body.appendChild(selectContainer);

function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }
}

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovies(movies) {
  if (movies.length === 0) {
    return [];
  }

  let maxYear = 0;
  const newestMovies = [];

  movies.forEach((movie) => {
    const movieYear = parseInt(movie.Year);

    if (movieYear > maxYear) {
      maxYear = movieYear;
      newestMovies.length = 0;
      newestMovies.push(movie);
    } else if (movieYear === maxYear) {
      newestMovies.push(movie);
    }
  });

  return newestMovies;
}


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti 
  nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const yearsArray = movies.map((movie) => movie.Year);
  return yearsArray; 
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  const thisMillenium = movies.filter((movie) =>{
    const year = parseInt(movie.Year);
    return year >= 2000 && year <= 2999;
  });
  return thisMillenium;
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  const totalYears = movies.reduce((total, movie) => {
    const year = parseInt(movie.Year);
    return total + year;
  }, 0);
  return totalYears  
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e 
  ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function extractWordsFromTitles(movies) {
  const wordsSet = new Set();
  movies.forEach((movie) => {
    const title = movie.Title;
    const words = title.split(' ');
    words.forEach((word) => {
      wordsSet.add(word);
    });
  });
  return Array.from(wordsSet);
}
function createRadioButtons(words) {
  const radioContainer = document.createElement("div");
  radioContainer.id = "radioContainer";
  document.body.appendChild(radioContainer);

  words.forEach((word) => {
    const radioLabel = document.createElement("label");
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "searchQuery";
    radioButton.value = word;

    radioLabel.appendChild(radioButton);
    radioLabel.appendChild(document.createTextNode(word));

    radioContainer.appendChild(radioLabel);
  });
}

function searchByTitle(movies, query) {
  query = query.toLowerCase();
  const matchingMovies = movies.filter((movie) => {
    const title = movie.Title.toLowerCase();
    return title.includes(query);
  });
  return matchingMovies;
}


const wordsFromTitles = extractWordsFromTitles(movies);
createRadioButtons(wordsFromTitles);

const radioContainer = document.getElementById("radioContainer");

radioContainer.addEventListener("change", function (event) {
  if (event.target.type === "radio" && event.target.checked) {
    const selectedWord = event.target.value;
    const matchingMovies = searchByTitle(movies, selectedWord);
    console.log(`Film che contengono "${selectedWord}" nel titolo:`, matchingMovies);
  }
});


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array:
   "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno 
  del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(movies, searchString) {
  searchString = searchString.toLowerCase();
  const match = movies.filter((movie) => {
    const title = movie.Title.toLowerCase();
    return title.includes(searchString);
  });
  const unmatch = movies.filter((movie) => {
    const title = movie.Title.toLowerCase();
    return !title.includes(searchString);
  });
  return { match, unmatch}
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies"
   fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(movies, index) {
  if ( index < 0 || index >= movies.length) {
    return movies;
  }

  const updatedMovies = [...movies];
  updatedMovies.splice(index, 1);
  return updatedMovies;
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainer() {
  const containerElement = document.getElementById("container");
  return containerElement  
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function allTd() {
  const tdElements = document.getElementsByTagName('td');
  return tdElements  
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTextInTd() {
  const tdElements = document.getElementsByTagName('td');
  
  for (let i = 0; i < tdElements.length; i++) {
    const text = tdElements[i].textContent;
    console.log(text);
    
  }
}

printTextInTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackgroundToLinks () {
  const links = document.getElementsByTagName('a');
  
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = 'red';
    
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addNewItemToList (newItemText) {
  const newItem = document.createElement('li');

  newItem.textContent = newItemText;
  const myList = document.getElementById('myList');
  myList.appendChild(newItem);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function resetList() {
  const myList = document.getElementById('myList');

  while (myList.firstChild) {
    myList.removeChild(myList.firstChild)
  }
}


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addTestToTr() {
  const trs = document.getElementsByTagName('tr');
  
  for (let i = 0; i < trs.length; i++) {
    trs[i].classList.add('test');
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e 
  costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(number) {
  for (let i = 0; i < number; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e 
  costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(number) {
  for (let i = 1; i <= number; i++) {
    let row = '';
    for (let j = 1; j <= number - i; j++) {
      row += ' ';      
    }
    for (let k = 1; k <= 2*i-1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e 
  ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return false;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i <= number; i++) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    } 
  }

  return true;
  
}

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]