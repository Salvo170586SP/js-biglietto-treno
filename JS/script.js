console.log('JS OK');
/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

BONUS 1
Stampare il risultato in pagina e non solo in console.
BONUS 2
Cercare, sulla base di quanto visto, di effettuare un minimo di validazione.
BONUS 3
Applicare un po' di CSS se siete riusciti a fare il bonus 1
*/



/* 
1-chiedere al passeggero numero di km
        *mandare in console variabile km
2-chiedere al passeggero l'età
         *mandare in console variabile età
3- dichiarare prezzo 0.21 ogni km
         *mandare in console variabile prezzo a km
4- calcolare sconto prezzo  
        - se minorenne sconta del 20%
        - se over 65 sconta del 40%
5- stampare risultato
*/



//1-chiedere al passeggero numero di km
const travelDistance = parseInt(prompt('Quanti km devi percorrere?').trim());

//2-chiedere al passeggero l'età
const ageUser = parseInt(prompt('Quanti anni hai?').trim());

//3- calcolare prezzo viaggio a ogni km
const price = 0.21 * travelDistance;


console.log("travelDistance: ", travelDistance);
console.log("ageUser: ", ageUser);
console.log("price: ", price);


let totalPrice = price;

//4- calcolare sconto prezzo 
if(ageUser < 18){
    //se minorenne esegui lo sconto del 20%
    totalPrice *= 0.8;

  console.log("total price under 18: ", totalPrice.toFixed(2));

}else if(ageUser > 65){
    //altrimenti se ha più di 65 anni fai lo sconto del 40%
    totalPrice *= 0.6;

    console.log("total price over 65: ", totalPrice.toFixed(2));
} 
 
document.getElementById('distance').innerText = travelDistance;
document.getElementById('age').innerText = ageUser;
document.getElementById('price-result').innerText = totalPrice.toFixed(2);