const motorista = {
    idade: 18,
//Para definfir dentro do Objeto não é (=) é (:)
//Fora do objeto você utiliza o (=)
//Sempre que vir uma outra propriedade tem que possuir uma (,)
    tem_CNH: true,
    tem_carro: false
}

//------------------------------------------------------------------------------------------------------------------//

console.log(motorista)

motorista.idade += 1; 
// motorista.idade++; || motorista.idade += 1;
//Se a gente coloca um += significa que você esta trocando o valor daquela variavel
motorista.tem_CNH = false;
motorista.tem_carro = true;

console.log(motorista)

//--------------------------------------------------------------------------------------------------------//

const produto = {
    produto:"Chocolate",
    marca:"Garota",
    preço: 100,
    produto_disponibilidade: true
}

console.log(produto)

produto.produto = "Chocolate"
produto.marca = "Garota"
produto.preço = 100
produto.produto_disponibilidade = true;

console.log(produto.produto)
console.log(produto.preço)

//-------------------------------------------------------------------------------------------------------//

  //Laço de repetição//
//dentro do for costuma utilizar o (++) no final, por ser mais rapido e pratico

for(let contador = 0; contador <= 30; contador++){
    console.log(contador)
}

//-------------------------------------------------------------------------------------------------------//

//Exercicio 01 - Realizei parcialmente sozinha!//

for(let numero = 1; numero <= 10; numero++){
    console.log(`5 x ${numero} = ${numero * 5}`)
}

//-----------------------------------------------------------------------------------------------------------//

  //Correção Marcos//

  let numero_inteiro = 10

  for(let contador = 1; contador <= 10; contador++){
    console.log(`${contador} x ${numero_inteiro} = ${contador * numero_inteiro}`)
  }

  //Geramos um (let para o numero que recebemos) e criamos um (let para o contador)
  //Para então podermos chamar o (let do numero inteiro) e o (let do numeroo do contador) para fazermos
  //o calculo das (variaveis/lets)


  //(++)Ele pressiona a variavel a sempre somar (+ 1)/(mais um)


  //O Contador guarda o valor inicial de 1
  //A let utilizando o (++) sempre vai obrigar a variavel a somar sempre mais um numero independente do
  //calculo que você for realizar



  //-------------------------------------------------------------------------------------------------------------//

  let contador = 1;

  let numero_while = 2;
  
  while(contador <= 10){
    console.log(contador * numero_while);
    contador++;
  }

  //for = Definimos o contador dentro do for

  //while = toda vez que o while rodar ele vai somar mais 1
  //se o while começar em 0 ele tem que estar em primeiro


//------------------------------------------------------------------------------------------------------------------//

  //03 - Contagem Regressiva//


for(let contador1 = 20; contador1 >= 2; contador1--){
  console.log(contador1)
  contador1--
}

