//#FUNÇÕES (SERVE PARA EXECUTAR CODIGOS VARIAS VEZES). São Ações que são executadas assim que são CHAMADAS ou em decorrência de algum EVENTO. 

/*

* Chamada: Dá a ordem para função rodar.
* Retorno (return) = resultado da função
* Parametro = informação de entrada, aquilo que deve ser feito pela função, o proposito. 
Acão = como a função vai funcionar

OBS: NEM TODA FUNÇAO TEM PARAMETROS, NEM TODA FUNÇAO TEM RETORNOS! 

 function Açao(parametros) {

 }

ação(5) - chamada, ou seja, ordem para que a função inicie. 

 ** 5 é um parâmetro, quando dermos a chamada, o 5 vai para o parâmetro, então nesse exemplo, o parâmetro passa a valer 5.

 ** Açao = nome da função

#OUTRO EXEMPLO (saber se um número é par ou ímpar)

function parOuÍmpar(n) {
    if(n%2 == 0) {
    return 'par'
} else {
    return 'ímpar'
}
}
console.log(parOuÍmpar(4))

*/

//criar um aplicativo de frases motivacionais

// function statement or declaração da função.

function creatPhrases () {
    console.log('Estudar é muito bom')
    console.log('A revisão é a mãe do aprendizado')
    console.log('Persistência é o menor caminho ao êxito')
}

//excutar a função
// rodar, chamar, invocar, execute, run, call, invoke

creatPhrases ()
creatPhrases ()

---------


//#PARÂMETROS E ARGUMENTOS

/* # function expression or  function anonymous - 
É como chamamos uma outra maneira de declarar uma função. Como por exemplo, declaramos uma função dentro de uma variavel. 

const sum = function(number1, number2){
    console.log(number1 + number2)

}

* P/ executar essa função acima:
sum(2, 3) 


//argumentos. nessa função EXECUTADA, 2 e 3, são ARGUMENTOS. A execução abaixo da função acima, alem de executar a função, ela também atribuiu seus argumentos aos parametros, então o os parâmetros passam a valer: 2 e 3. 

-------------- 

//Retornando Valores dentro da Função. 

const sum = function(number1, number2){
    console.log(number1 + number2)

}
let number1 = 34
let number2 = 25
*****ATENÇAO: o number 1 e number 2 aqui de fora do escopo da função da linha 74, é diferente do number1 e number2 de dentro da função!!!!!

const sum = function(number1, number2){
    console.log(number1 + number2)

}
let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

resultado no console:
o numero 1 é 34
o numero 2 é 25
59
a soma é undefined

Explicação do resultado no console: O código imprime a linha 89 e 90. Após isso, o código vai para linha 91, entrando na função e execuando-a, fazendo a soma do number1 + number2, terminando de executar, o código retorna para a função, que por sua vez, não tem o RETURN, fazendo com que a a linha 97 apareça um undefined.

**** Vamos ver agora, a função com o RETURN: 

const sum = function(number1, number2){
    total = number1 + number2
    return total

}
let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

resultado no console:
o numero 1 é 34
o numero 2 é 25
a soma é 59

Explicação: Como essa função possui o RETURN, toda vez que uma função encontra uma linha dentro de si com um return, a função para imediatametne e retorna(retorna o que vem a frente), que nesse caso, são as variáveis das linhas 108 e 109, fazendo a soma. 





--------





//# FUNÇÃO HOISTING
//A função foi EXECUTADA primeiro antes de ser CRIADA. Ela funcionará normalmente, pois com esse modelo, ela consegue fazer o efeito hoisting(elevação), jogando a CRIAÇÃO da função para cima da EXECUÇÃO. 

sayMyName ()

function sayMyName () {
    console.log ('Guilherme')
}

//ATENÇÃO! Quando criamos uma função de EXPRESSÃO, ela não sofrerá HOISTING(ELEVAÇÃO), MESMO UTILIZANDO O VAR. 

sayMyName ()

var sayMyName = function () {
    console.log('Guilherme')
}

//# Outro meio de escrever uma função 
//Arrow (seta) function

const sayMyName = () => {
    console.log('Guilherme')
}

sayMyName('Guilherme')

 // CALLBACK FUNCTION: NADA MAIS É, QUE UMA FUNÇÃO QUE PASSA COMO PARAMETRO PARA OUTRA FUNÇÃO. 
//Explicação do Callback abaixo. A execução abaixo da função criada acima da execução, está passando seus valores como parâmetros para a criação da função. 

function sayMyName (name) {
    console.log(name)
}

sayMyName (
    () => {
        console.log {'estou em uma callback'}
    }
)

function valorReferencia(strVar, arrVar) {
  strVar = 'String Modificada';
  arrVar[0] = 'Array Modificado';
}
var texto = 'Valor Original';
var vetor = ['Valor Original'];

console.log('String ANTES de chamar a função:'  + texto +) 
var vetor = ['Valor Original'];
console.log('Array ANTES de chamar a função:'  + vetor[0] +); 