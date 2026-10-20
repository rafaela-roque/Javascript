//console.log > mostra uma informação no console
console.log("Óla, Mundo");
console.log(2 + 7);

console.log(typeof "óla Mundo") //string
console.log(typeof 22) //number
console.log(typeof 10.5) //number
console.log(typeof true) //boolean
console.log(typeof false) //boolean



// -------------------------------------------------------------------------------------------------------
                         


    // Váriavel //
// const não pode ter seu valor alterado durante o programa
const nome = "Karol";
console.log(nome);

// let pode ter seu valor alterado durante o programa
let idade = 17;
console.log(idade);

console.log("Olá " + nome +", que tem " + idade + " anos.")
idade = 18;


console.log(idade)


console.log(`Olá ${nome}, que tem ${idade} anos.`);




// ------------------------------------------------------------------------------------------------------------------------





    // Váriavel //

let apelido = "Rafaela"

let peso = 400;

console.log(peso);

console.log("Olá " + apelido +", que tem " + peso + " kg.")

peso = 100;


console.log(peso)


apelido = "Rafa"


console.log(`Olá ${apelido}, que tem ${peso} kg.`)



//-------------------------------------------------Método de String-------------------------------------------------------


// Método de string
const texto = "JavaScript"

// Conta quantos caracteres a string tem
console.log(texto.length)

// Altera todas as letras para maiuscula
console.log(texto.toUpperCase()) 

// Altera todas as letras para minuscula
console.log(texto.toLocaleLowerCase())

const nome_completo = "Rafaela Roque Batista Da Silva"

console.log(nome_completo.includes("Roque"))

console.log(10 > 5) // true
console.log(10 < 5) // false
console.log(10 >= 10) // true
console.log(10 <= 5) // false
console.log("10" == 10) //false
console.log(10 !== 5) //true


const idade_pessoa = 17;

console.log(idade_pessoa >= 18);
console.log(idade_pessoa >= 16);

// -------------------------------------------------------Exercicio-------------------------------------------------



const palavra_nome = "Rafaela"
// console.log(texto.toUpperCase())

const nome_palavra = "Karol"
// console.log(texto.toLocaleLowerCase())

console.log(palavra_nome == "Karol")

//  Quando você for fazer uma pergunta utiliza (==)
//  Quando você quer salvar algo dentro de um elemento utiliza (=)


// ------------------------------------------------------------------------------------------------------------------


//coletamos a idade da pessoa
let pessoa_idade = 15;
//verificar se a idade é maior ou igual a 18
if(pessoa_idade >= 18){
    //se a maior ou igual a 1 então é ela maior de idade
    console.log("Já pode ser preso HAHHAHAHA!")
}else{
    //senão, então ela é menor de idade
    console.log("Não vaioa pra balada! 😂😂😂")
}

//coletamos a idade da pessoa
let idade_votacao = 16
//verificar se a idade da pessoa é maior que 70
if(idade_votacao > 70){
    console.log("Você não é obrigado a votar!")
}else if(idade_votacao >= 18){
    //senão sea a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
} else if (idade_votacao >= 16){
    //senão se a idade da pessoa for maior que ou igual a 16
    console.log("Você não é obrigado a votar, mas caso queira pode!")
} else{
    //senão for nenhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
}


//--------------------------------------Exercicios-----------------------------------------------------------------//

//Media do aluno - 01 //

//temos a media do aluno
let media_aluno = 6
//verificar se a medida da pessoa e maior ou igual a 7
if(media_aluno >=7){
    //se a media do aluno for maior que 7
    console.log("Aprovado!")
}else{
    //se a media do aluno for menor que 7
    console.log("Reprovado")
}

//-------------------------------------------------------------------------------------------------------//

//Receber dois Numeros - 02 //

//receber o primeiro numero
let primeiro_numero = 6
//receber o segundo numero
let segundo_numero = 7
if(primeiro_numero > segundo_numero){
    //se o primeiro numero for maior que o segundo 
    console.log("Primeiro numero é o maior numero")
}else if(segundo_numero > primeiro_numero){
    //Se o segundo numero for maior que o primeiro numero
    console.log("Segundo numero é o maior numero")
}else{
    //Senão os dois nurmeros forem iguais
    console.log("Houve um empate")
}


//--------------------------------------------------------------------------------------------------------//


//Senha Senai - 03 //

//Receber a senha
let senha_Senai = "senai123"
//Se a senha for 
if(senha_Senai == "senai123"){
    //se for igual a senha do Senai
    console.log("Acesso Autorizado!")
}else if ("senai123" <= senha_Senai){
    //Senão for igual a senha do Senai
    console.log("Senha incorreta")
}


//------------------------------------------------------------------------------------------------------//

//Temperatura - 04 //

//Receber uma temperatura
let temperatura_recebida = 28

//Abaixo de 18°C
if(temperatura_recebida < 18){
    console.log("Frio")
}if (temperatura_recebida <= 27){
    console.log("Agradável")
}if(temperatura_recebida >= 27){
    console.log("Quente!")
}

//----------------------------------------------------------------------------------------------------------/

//Classificação de Nota - 05//

//receber uma nota de 0 a 10
let nota_recebida = 3
//se a nota recebida for aapartir de 9 
if (nota_recebida >= 9){
    console.log("Excelente")
}else if(nota_recebida >=7){
    console.log("Bom")
}else if(nota_recebida <= 5){
    console.log("insuficiente!")
}

//---------------------------------------------------------------------------------------------------------//

//Dia da semana - 06//

//receber um numero
let numero_semana = 8

if(numero_semana == 1){
//se o numero da semana for igual a 1
    console.log("domingo")
}else if(numero_semana == 2){
//se o numero da semana for igual a 2
    console.log("Segunda-Feira")
}else if(numero_semana == 3){
//se o numero da semana for igual a 3
    console.log("Terça-Feira")
}else if(numero_semana == 4){
//se o numero da semana for igual a 4
    console.log("Quarta-Feira")
}else if(numero_semana == 5){
//se o numero da semana for igual a 5
    console.log("Quinta-Feira")
}else if(numero_semana == 6){
//se o numero da semana for igual a 6
    console.log("Sexta-Feira")
}else if(numero_semana == 7){
//se o numero da semana for igual a 7
    console.log("Sábado")
}else{
//se o numero da semana for maior que 7
    console.log("dia invalido")
}

