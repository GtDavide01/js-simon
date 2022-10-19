// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// [*]Scrivere in pagina 5 numeri casuali e salvarli in un array
//    [*]Far partire un timer di 30 secondi
//    [*]Dopo i 30 secondi faccio scomparire i  5 numeri casuali
// [*]Chiedo tramite prompt 5 numeri all'utente e li salvo in un array   
// [*]Confronto i 5 numeri random con quelli inseriti dall'utente
//    [*]Stampo quanti e quali numeri l'utente ha indovinato 

//Stampo  5 numeri casuali in pagina
//Recupero il paragrafo dall'html
const randomNum = document.getElementById("number-random");
console.log(randomNum);
const userNumberHtml = document.getElementById("number-user");
console.log(userNumberHtml);
const result = document.getElementById("result");
const resultTot = document.getElementById("result-tot");
//Creo un array vuoto che conterrà i 5 numeri casuali
const arrayRandomNum = [];
//Creo array dove salvo numeri inseriti dall'utente
const userNumber = [];
//Ciclo for che si ripete per 5 volte e inserisce il numero all'interno dell'array
for ( let i = 0 ; i<5 ; i++){
    let numberGenerate = parseInt(getRandomNumber(1,100));
    arrayRandomNum.push(numberGenerate);
    //Stampo in pagina i valori all'interno dell'array 
    randomNum.innerHTML += "  "+arrayRandomNum[i]+" ";
}
console.log(arrayRandomNum);
//Richiamo setTimeout per far partire un timer di 30 secondi
const timer = setTimeout(function(){
      //Dopo 30 secondi faccio scomparire i numeri visualizzati  a schermo 
      randomNum.classList.add("none");
},10000)
const timerUserNumber = setTimeout(function(){
    //Creo ciclo for per chiedere all'utente 5 numeri tramite prompt e li salvo nell'array
    for( let i  =  0 ; i<5 ; i++){
        //Chiedo all'utente il numero tramite prompt
        const numberChoiceUser = parseInt(prompt("Inserisci un numero che ricordi di vaer visto..."));
        //salvo il numero inserito dall'utente nell'array
        userNumber.push(numberChoiceUser);
        //Stampo nell'html i numeri inseriti dall'utente 
        userNumberHtml.innerHTML += " "+userNumber[i];
        
    }
    console.log(userNumber);
    //Confronto i valori dei due Array 
    let nNumberEquals = 0;
    for ( let i=0 ; i < arrayRandomNum.length ; i++){
        let temp = arrayRandomNum[i];
        for ( let j=0; j < userNumber.length ; j++){
        let temp2 = userNumber[j];
        if ( temp == temp2 ){
        nNumberEquals++;
        result.innerHTML += " "+temp ;
        }
    }
    }
    resultTot.innerHTML += nNumberEquals;
},11000)











//FUNZIONI
//funzione per numeri random 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

