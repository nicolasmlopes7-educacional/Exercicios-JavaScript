// NÍVEL BÁSICO

//  Exercício 1:

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// Exercício 2 :

const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function () {

    const usuario = document.getElementById("tabuada").value;

    for (let i = 1; i < 11; i++) {
        console.log(`${usuario} x ${i} = ${usuario * i}`);
    }
})

// Exercícios 3:

let soma = 0;
let numero = 6;

for (let i = 1; i <= numero; i++) {
    soma = soma + i;
}
console.log(soma);

// NÍVEL INTERMEDIÁRIO

// Exercício 1: 

for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

// Exercício 2:

//   Jogo de adivinhação:
//     - Gere um número aleatório de 1 a 100.
//     - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//     - Informe se o número inserido é maior ou menor que o correto.

// Exercício 3:

let numUsuario = 15;

while (numUsuario <= 15 && numUsuario >= 0) {
    console.log(numUsuario);
    numUsuario--;
}

// Exercício 4:

const senha = 15;

let i = 0;

while (i >= 0 && i < senha) {
    i++;
    if (i == senha) {
        console.log("Você acertou a senha, e a senha é: " + senha);
    }
    else {
        console.log("Você errou a senha, tentativa de senha: " + i);
    }
}

// Exercício 5:

// Soma até parar:
//     - Peça números ao usuário
//     - Continue somando até ele digitar 0
//     - Mostre o total no final

// Exercício 6:

const notas = [10, 8, 7, 9, 6];

let soma1 = 0;

// Começa no índice 0 e vai até o final da lista (notas.length)
for (let i = 0; i < notas.length; i++) {
  soma1 += notas[i]; // Soma o valor atual ao total acumulado
}

const media = soma1 / notas.length;

console.log(`A média final é: ${media.toFixed(2)}`); 
// O .toFixed(2) serve para limitar o resultado a 2 casas decimais