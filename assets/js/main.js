// Scrivi un programma che stampi i numeri da 1 a 100,
// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero

// IMPOSTO IL NUMERO MINIMO E IL NUMERO MASSIMO COME COSTANTI IN MODO DA POTERLI MODIFICARE IN MODO PIÚ DINAMICA
const countFromNumber = 1;
const countToNumber = 100;

let output;
for (let i = countFromNumber; i <= countToNumber; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        output = `FizzBuzz (${i})`
    } else if (i % 3 == 0 && i % 5 != 0) {
        output = `Fizz (${i})`
    } else if (i % 3 != 0 && i % 5 == 0) {
        output = `Buzz (${i})`
    } else {
        output = i
    }
    console.log(output)
}