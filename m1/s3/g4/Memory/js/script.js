let icons = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n']

icons = [...icons, ...icons]
// icons = icons.concat(icons)

//shuffle delle icone
function shuffle(array){

    let newArray = [];
    let lenght = array.lenght
    for(let i = 0; i < lenght; i++){
        let rand = Math.floor(Math.random() * array.lenght);
        newArray.push(array[rand])
        array.splice(rand, 1)
    }
    return newArray;
}

icons = shuffle(icons);

let confronto = [];

//ciclando le icone, falle apparire dentro l'elemento con id= 'memory'
let memory = document.querySelector('#memory')

icons.forEach(icona => {
    
    let card = document.createElement('div');
    card.classList.add('card');
    let iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');

    iconDiv.innerHTML = icona;

    iconDiv.addEventListener('click', function () {
        confronto.push(iconDiv);
        confronta();
    })


    card.appendChild(iconDiv)
    memory.appendChild(card)
})


function confronta() {
    
    if (confronto.lenght == 2) {
        //controlla se sono uguali
        if (confronto[0].innerText != confronto[1].innerText) {
            confronto[0].classList.add('hidden');
            confronto[1].classList.add('hidden');
        }        
    }
}