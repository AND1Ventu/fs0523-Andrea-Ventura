// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") 
 e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
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

function checkArray(array) {
    let sumMag5 = 0;
    for (let num of array) {
        if (num > 5){
            console.log('il numero è maggiore di 5');
            sumMag5 += num;
        } else if (num === 5) {
            console.log('il numero è uguale a 5');
        } else {
            console.log('il numero è minore di 5');
        }
    }
    return sumMag5
}

console.log(checkArray(randomNumbers))
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
    {
        price: price,
        name: name,
        id: id,
        quantity: quantity
    }
]

function shoppingCartTotal(shoppingCart) {
    let totalCart = 0;
    for (let obj of shoppingCart) {
        totalCart += (obj.price * obj.quantity)
    }
    return totalCart
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, 
 lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function assToShoppingCart(obj, shoppingCart) {
    shoppingCart.push(obj)
    return shoppingCart.lenght
}

let obj = {}

do {
    for (prop in shoppingCart[0]) {
        obj[prop]  =  prompt('add ' + prop + ': ')
        }
    let propertiesObj = obj.getOwnPropertyNames()    
    for ( prop of propertiesObj) {
        if (prop !== false){
            check 
        }
    }
} while (

);


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
    let priceMax = 0;
    let objMax = {};
    for (let element of shoppingCart) {
        if (element.price >= priceMax){
            priceMax = element.price;
            Object.defineProperties(objMax, element)
        }
    }
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.lenght - 1]
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9
 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
    do {
        let i = 0;
        random = giveMeRandom()
        console.log(random)
        if (random > x){
            i += 1
        }
    } while (i < 3);
}

function giveMeRandom(n=1) {
    var randomNumbers = [];
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNumber)
    }
    return randomNumbers
}


let x;
do {
    x = prompt('Inserire il valore x: ')
} while (!(9 >= x >= 0 ));

loopUntil(x);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica.
 La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(array) {
    let sumNum = 0;
    let numerosita = 0;
    for (let element of array) {
        if (typeof(element) === 'number') {
            sumNum += element;
            numerosita += 1
        }
    }
    return average = sumNum / numerosita
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest(array) {
    let long;
    for (let element of array) {
        if (element >= long) {
            long.push(element)
        }
    }
    return long;
}


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. 
 La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function antiSpam(emailContent) {
    let matchesSpam = str.matchAll('SPAM')
    let matchesScam = str.matchAll('SCAM')
    if ((!(matchesScam)) && (!(matchesSpam))) {
        return true
    }
}

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function howManyDays(data) {
    let millisecData = Date.parse(data)
    let now = new Date()
    let millisecNow = Date.parse(now)
    let max = Math.max(millisecData, millisecNow)
    let min = Math.min(millisecData, millisecNow)
    let diff = max - min;
    let days = diff / ( 1000 * 60 * 60 *24)
    return days
}

let data = new Date('2020-02-20');
let days = howManyDays(data)

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x,y) {
    let matrix = [] 
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            matrix.push(str(x)+str(y))
        }
    }
}

do {
    let x = prompt('inserisci x intero: ')
} while (x < 1);
do {
    let y = prompt('inserisci y intero: ')
} while (y < 1);

matrixGenerator(x,y)