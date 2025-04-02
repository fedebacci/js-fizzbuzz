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

for (let i = countFromNumber; i <= countToNumber; i += counterStep) {
    let output;
    if (i % dividerOne == 0 && i % dividerTwo == 0) {
        output = `${outputOne}${outputTwo} (${i})`
    } else if (i % dividerOne == 0) {
        output = `${outputOne} (${i})`
    } else if (i % dividerTwo == 0) {
        output = `${outputTwo} (${i})`
    } else {
        output = i
    }
    console.log(output)
}