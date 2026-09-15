// NÍVEL BÁSICO //

// Exercício 1:

const idade = 15;

if (idade >= 18) {
    console.log("Você é maior de idade!");
}

else {
    console.log("Você é menor de idade!")
}

// Exercício 2:

const numUsuario = 2;

if (numUsuario > 0) {
    console.log("Número é positivo!");
}

else {
    console.log("Número é negativo!");
}

// Exercício 3:

const nota = 60;

if (nota >= 60) {
    console.log("Aprovado!");
}

else {
    console.log("Reprovado!");
}

// Exercício 4:

const numero = -1;

if (numero > 0) {
    console.log("O número é positivo!");
}

else if (numero == 0){
    console.log("O número é zero!");
}

else {
    console.log("O número é negativo!");
}

// Exercício 5: 

const idade2 = 18;

if (idade2 > 0 && idade2< 13) {
    console.log("Você é uma criança!");
}

else if (idade2 > 12 && idade2 < 18) {
    console.log("Você é um adolescente!");
}

else if (idade2 >= 18) {
    console.log("Você é um adulto!");
}

else {
    console.log("Idade Inválida, insira um número positivo!");
}

// Exercício 6:

const num2 = 2;

if (num2 %2 == 0) {
    console.log("O número é par!");   
}

else {
    console.log("O número é ímpar!");   
}

// NÍVEL INTERMEDIÁRIO

// Exercício 1:

const num3 = 2;
const num4 = 5;

let operacao = "/";

if (operacao == "*") {
    console.log(num3 * num4);
}
else if (operacao == "+") {
    console.log(num3 + num4);
}
else if (operacao == "-") {
    console.log(num3 - num4);
}
else if (operacao == "/") {
    console.log(num3 / num4);
}



// Exercício 2:

const num5 = 1;
const num6 = 33;
const num7 = 5;

if (num5 > num6 && num5 > num7) {
    console.log(num5);
}
else if (num6 > num5 && num6 > num7) {
    console.log(num6);
}
else if (num7 > num6 && num7 > num5) {
    console.log(num7);
}

// Exercício 3:

let preco = 200;
let desconto = preco / 10;

if (preco > 100) {
    let valorComDesconto = preco - desconto;
    console.log(valorComDesconto);
}

else {
    console.log(preco);
}

// Exercício 4:

const usuario = "exemplo@gmail.com";
const senha = "1234";

let exemploUsuario = "exemplo@gmail.com";
let exemploSenha = "12345";

if (exemploUsuario == usuario &&  exemploSenha == senha) {
    console.log("Login bem-sucedido!");
}

else {
    console.log("Acesso negado!");
}