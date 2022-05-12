//#FUNÇÕES (SERVE PARA EXECUTAR CODIGOS VARIAS VEZES)

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
É como chamamos uma outra maneira de declarar uma função */

/*QUANDO FORMOS DECLARAR FUNÇÃO DENTRO DE UMA VARIAVEL IREMOS DECLARAR COMO O ABAIXO. 

CONST (VARIAVEL) + SUM *SOMAR* *É O NOME DA FUNÇÃO*  =  FUNCTION ({

})
*/

//parâmetros (parameters) aqui nessa função CRIADA, number1 e number2, são PARÂMETROS. 

const sum = function (number1, number2) {
    console.log(number1+number2)
}

//argumentos. nessa função EXECUTADA, 2 e 3, são ARGUMENTOS. Abaixo foi utilizado a função, que tem cmo finalidade repetir a execução do código várias vezes.

//Explicação: a execução abaixo da função acima, alem de executar a função, ela também linkou seus argumentos aos parametros para que a função pudesse ser executada e fazer a soma corretamente. 
sum(2, 3)

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
//Explicação do Callback abaixo. A execução abaixo da funcção criada acima da execução, está passando seus valores como parâmetros para a criação da função. 

function sayMyName (name) {
    console.log(name)
}

sayMyName (
    () => {
        console.log {'estou em uma callback'}
    }
)