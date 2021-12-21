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
4- dichiarare prezzo 0.21 ogni km
         *mandare in console variabile prezzo a km
5- calcolare prezzo viaggio calcolare 0.21 a ogni km 
        - se minorenne sconta del 20%
        - se over 65 sconta del 40%
6- stampare risultato
*/


//1-chiedere al passeggero numero di km
const travelDistance = prompt('Quanti km devi percorrere?', '100');
console.log("travelDistance: ", travelDistance);

//2-chiedere al passeggero l'età
const ageUser = prompt('Quanti anni hai?', '35');
console.log("ageUser: ", ageUser);

//3- calcolare prezzo viaggio a ogni km
const price = 0.21 * travelDistance;
console.log(price);

//5- calcolare prezzo viaggio calcolare 0.21 a ogni km 

if(18 > ageUser){
    console.log("è minorenne");
}else if (65 < ageUser){
    console.log("è over 65")
}

