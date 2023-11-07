//Chiedere all’utente di inserire una parola.
const parola = prompt("Inserisci una parola")
console.log(parola)


// Dichiarazioni di funzione "parolaPalindroma"
function parolaPalindroma (){
    //Creazione di variabile "myString" che contendra la parola invertita
    const myString = parola.split("").reverse().join("");
    //Restituisce la parola invertita
    return myString;

}
// Chiamiamo la funzione "parolaPalindroma" e asegnamo il suo risultato a "risultato"
const risultato = parolaPalindroma ();

 
// Verifica se la parola invertita ("risultato") è uguale alla parola originale che inserisce l'autente
if (risultato == parola){
    console.log("È una parola palindroma " + risultato )

}

else{
    console.log(parola + " "+ "non è una parola palindroma")
}