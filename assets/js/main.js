// Scrivi un programma che stampi i numeri da 1 a 100,
// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero

// IMPOSTO IL NUMERO MINIMO E IL NUMERO MASSIMO COME COSTANTI IN MODO DA POTERLI MODIFICARE IN MODO PIÚ DINAMICA
const countFromNumber = 1;
const countToNumber = 100;
const dividerOne = 3;
const outputOne = "Fizz";
const dividerTwo = 5;
const outputTwo = "Buzz";
const counterStep = 1;

// RICHIEDO SUL MOMENTO TUTTE LE INFORMAZIONI ALL'UTENTE, JUST FOR FUN
// const countFromNumber = parseInt(prompt("Da quale numero inizio a contare?", 1));
// const countToNumber = parseInt(prompt("A quale numero smetto di contare?", 100));
// const counterStep = parseInt(prompt("Ogni quanto incremento il contatore?", 1));
// const dividerOne = parseInt(prompt("Quale è il primo divisore?", 3));
// const outputOne = prompt("Cosa devo scrivere per i numeri divisibili per primo divisore?", "Fizz").toString();
// const dividerTwo = parseInt(prompt("Quale è il secondo divisore?", 5));
// const outputTwo = prompt("Cosa devo scrivere per i numeri divisibili per primo divisore?", "Buzz").toString();

console.info("countFromNumber:", countFromNumber)
console.info("countToNumber:", countToNumber)
console.info("counterStep:", counterStep)
console.info("dividerOne:", dividerOne)
console.info("outputOne:", outputOne)
console.info("dividerTwo:", dividerTwo)
console.info("outputTwo:", outputTwo)

if (isNaN(countFromNumber) || isNaN(countToNumber) || isNaN(counterStep) || isNaN(dividerOne) || outputOne.length == 0 || !isNaN(parseInt(outputOne)) || isNaN(dividerTwo) || outputTwo.length == 0 || !isNaN(parseInt(outputTwo))) {

    let errorMessage = "C'è stato un errore, leggi le istruzioni sotto riportate e ricarica la pagina per riprovare."

    if (isNaN(countFromNumber)) {
        errorMessage = `${errorMessage} \n~ IL NUMERO DA CUI PARTIRE DEVE ESSERE ESPRESSO SOTTO FORMA DI NUMERO!`
    }
    if (isNaN(countToNumber)) {
        errorMessage = `${errorMessage} \n~ IL NUMERO FINO A CUI CONTARE DEVE ESSERE ESPRESSO SOTTO FORMA DI NUMERO!`
    }
    if (isNaN(counterStep)) {
        errorMessage = `${errorMessage} \n~ IL NUMERO PER INCREMENTARE IL CONTATORE DEVE ESSERE ESPRESSO SOTTO FORMA DI NUMERO!`
    }
    if (isNaN(dividerOne)) {
        errorMessage = `${errorMessage} \n~ IL PRIMO DIVISORE DEVE ESSERE ESPRESSO SOTTO FORMA DI NUMERO!`
    }
    if (outputOne.length == 0) {
        errorMessage = `${errorMessage} \n~ IL TESTO DEL PRIMO DIVISORE NON PUO ESSERE VUOTO!`
    }
    if (!isNaN(parseInt(outputOne))) {
        errorMessage = `${errorMessage} \n~ IL TESTO DEL PRIMO DIVISORE NON PUO ESSERE ESPRESSO SOTTO FORMA DI NUMERO!`
    }
    if (isNaN(dividerTwo)) {
        errorMessage = `${errorMessage} \n~ IL SECONDO DIVISORE DEVE ESSERE ESPRESSO SOTTO FORMA DI NUMERO!`
    }
    if (outputTwo.length == 0) {
        errorMessage = `${errorMessage} \n~ IL TESTO DEL SECONDO DIVISORE NON PUO ESSERE VUOTO!`
    }
    if (!isNaN(parseInt(outputTwo))) {
        errorMessage = `${errorMessage} \n~ IL TESTO DEL SECONDO DIVISORE NON PUO ESSERE ESPRESSO SOTTO FORMA DI NUMERO!`
    }

    alert(errorMessage)

} else {
    for (let i = countFromNumber; i <= countToNumber; i += counterStep) {
        
        // SVOLGIMENTO ESERCIZIO 
        let output;
        // if (i % dividerOne == 0 && i % dividerTwo == 0) {
        //     output = `${outputOne}${outputTwo} (${i})`
        // } else if (i % dividerOne == 0) {
        //     output = `${outputOne} (${i})`
        // } else if (i % dividerTwo == 0) {
        //     output = `${outputTwo} (${i})`
        // } else {
        //     output = i
        // }
        // console.log(output)
        // console.log("______________________________________")


        // TEST SWITCH
        // @ TODO - MIGLIORARE CERCANDO UN MODO DI NON RIPETERE SEMPRE IL LOG DELL'OUTPUT (CON FALL-THROUGH, INVERTENDO ORDINE DEI CONTROLLI DI DIVISIBILITÁ? EVENTUALMENTE NECESSARIO AGGIUNGERE CONTROLLI NEGATIVI COME ALL'INIZIO (NON CREDO)?)
        switch (true) {
            case i % dividerOne == 0 && i % dividerTwo == 0:
                output = `${outputOne}${outputTwo} (${i})`;
                console.log(output);
                break;
            case i % dividerOne == 0:
                output = `${outputOne} (${i})`;
                console.log(output);
                break;
            case i % dividerTwo == 0:
                output = `${outputTwo} (${i})`;
                console.log(output);
                break;
            default:
                console.log(i);
                break;
        }
        

    }
}
