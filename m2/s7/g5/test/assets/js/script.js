document.addEventListener("DOMContentLoaded", function () {
    // Mostra l'indicatore di caricamento
    showLoadingIndicator();

    // Effettua la tua chiamata API o qualsiasi altra operazione che richiede tempo
    fetch("https://striveschool-api.herokuapp.com/api/product", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTU0MTI1NGU4ODAwMTgzZjE4NmIiLCJpYXQiOjE2OTk2MDM3NzgsImV4cCI6MTcwMDgxMzM3OH0.elvQhPg3lOOjwjwzlfrc61qz8ir66WHEu7IwS0TWiy4"
        }
    })
    .then(response => response.json())
    .then(prodotti => {
        // Rimuovi l'indicatore di caricamento
        hideLoadingIndicator();

        // Popola la tabella con i dati ottenuti dalla chiamata API
        prodotti.forEach((prodotto, i) => {

            let clone = getClone();
            let image = clone.querySelector(".image img");
            let id = clone.querySelector(".id");
            let name = clone.querySelector(".name");
            let description = clone.querySelector(".desc");
            let brand = clone.querySelector(".brand");
            let price = clone.querySelector(".price");
            
            let elimina = clone.querySelector(".elimina");
            let modifica = clone.querySelector(".modifica");
            let details = clone.querySelector('.scopri-di-piu');

            id.innerHTML = (i + 1);
            name.innerHTML = prodotto.name;
            description.innerHTML = prodotto.description;
            brand.innerHTML = prodotto.brand;
            price.innerHTML = prodotto.price;
            image.src = prodotto.imageUrl;
            image.alt = prodotto.name;
            image.style.width = "100px";
            modifica.href = "modifica.html?id=" + prodotto._id
            details.href = "details.html?id=" + prodotto._id

            elimina.addEventListener("click", () => {
                fetch("https://striveschool-api.herokuapp.com/api/product/" + prodotto._id, {
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTU0MTI1NGU4ODAwMTgzZjE4NmIiLCJpYXQiOjE2OTk2MDM3NzgsImV4cCI6MTcwMDgxMzM3OH0.elvQhPg3lOOjwjwzlfrc61qz8ir66WHEu7IwS0TWiy4"
                    }
                })
                    .then(res => {
                        if (res.status == 200) {
                            clone.remove();
                            alert("Prodotto eliminato");
                        }
                    });
            });

            document.querySelector('#lista').append(clone);
        });
    })
    .catch((error) => {
        // Gestisci gli errori, ad esempio nascondendo l'indicatore e mostrando un messaggio di errore
        hideLoadingIndicator();
        console.error("Errore durante il recupero dei dati:", error);
    });
});

// Funzione per mostrare l'indicatore di caricamento
function showLoadingIndicator() {
    document.querySelector(".loading-indicator").style.display = "flex";
}

// Funzione per nascondere l'indicatore di caricamento
function hideLoadingIndicator() {
    document.querySelector(".loading-indicator").style.display = "none";
}

function getClone() {
    let temp = document.getElementsByTagName("template")[0];
    return clone = temp.content.cloneNode(true);
}
