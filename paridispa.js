
/*// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
const btnPari = document.getElementById("pari");
btnPari.addEventListener("click", function() {
    console.log("Hai selezionato numeri Pari");
});

const btnDispari = document.getElementById("dispari");
btnDispari.addEventListener("click", function() {
    console.log("Hai selezionato numeri dispari");
});

const numeroUtente = document.getElementById("numeroUtente");
let numeroInserito;

numeroUtente.addEventListener("input", function () {
    numeroInserito = parseInt(numeroUtente.value);
    console.log("Il numero inserito è: " + numeroInserito);
}); */

// Evento per generare il numero
document.getElementById("generaNumeri").addEventListener("click", function () {

    //ottiene la scelta dall'utente
    let scelta = "pari"; // modifica con il valore corretto


    //ottiene il numero inserito dall'utente
    const numeroInserito = parseInt(document.getElementById("numeroUtente").value);


    // Numero casuae per il computer
    const numeroComputer = numeroCasuale(1, 5);

    // sommo i numeri
    const somma = numeroInserito + numeroComputer;

    // Controllo che la somma sia pari o dispari
    let risultatoParDispar = pariOrDispari(somma);
    
    console.log("Numero computer", numeroComputer)
    console.log("Somma totale: ", somma);
    console.log("risultato: ", risultatoParDispar);

    if (scelta.toLowerCase() == risultatoParDispar) {
        alert("Vince Utente");
    }
    else {
        alert("Vince Computer")
    }

});



function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pariOrDispari(numero) {
    let risultato = "dispari";

    if (numero % 2 == 0) {
        risultato = "pari"
    }

    return risultato;
}


