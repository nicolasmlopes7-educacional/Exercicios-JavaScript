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
let numero = 2

for (let i = 1; i <= 2; i++) {
    soma = soma + i;
}
console.log(soma);