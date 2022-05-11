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
//function expression
// function anonymous

//parâmetros (parameters) aqui nessa função CRIADA, number1 e number2, são PARÂMETROS.
const sum = function (number1, number2) {
    console.log(number1+number2)
}

//argumentos. nessa função EXECUTADA, 2 e 3, são ARGUMENTOS. Abaixo foi utilizado a função, que tem cmo finalidade repetir a execução do código várias vezes.
sum(2, 3)
sum(10, 20)
sum(35, 35)

//