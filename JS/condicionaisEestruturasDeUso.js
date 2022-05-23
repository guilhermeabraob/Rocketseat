//#CONDICIONAIS E CONTROLE DE FLUXO

//If....Else

/*
let temperature = 36,5

if (temperature >= 37) {
    console.log('Febril')
} else {
    'Saudável'
}
*/


//Outro jeito de If e Else

/*
let temperature = 38 
if (temperature >= 37.5) {
    console.log('Febre')
} else if (temperature < 37.5 && temperature >= 37){
    console.log('Febril')
} else {
    console.log('Saudável')
}
*/

// Outro jeito If Else

let temperature = 36.5 
let highTemperature = temperature > 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
}
else if(mediumTemperature) {
    console.log('Febril')
} else {
    console.log(Saudável)
}

---------

//Switch

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break;
    }
    return result
}

console.log(calculate(4, '+', 8))//resultado = 12

----------

// Throw e Try...Catch

// Vamos tentar (TRY) executar um bloco de código, e se houver algum erro nesse bloco de código, o Trow vai disparar (informar) que há um erro. E o catch vai capturar esse erro e dar continuidade ao código, assim, a aplicação segue em diante.Caso a gente não tivesse usado o try...catch no código, a execução seria pausada com o erro, pois o Throw sem o Catch, faz com que a função ou codigo sejam interrompidos. 
// A ordem desse processo é: 1° Try, 2°Throw e 3°Catch

//EX:

function sayMyName(name = '') {
    if (name === '')
    throw 'nome é obrigatório'
}
    try {
      sayMyName()  
    } catch(e) {
        console.log(e)
    }
console.log('após a função de erro')

/* 

Obs1: O throw pode ser usado sem o Try...Catch, mas isso fará com que a função seja interrompida!
Obs2: Por padrão, o catch nós utilizamos como parâmetro o (e)

Vamos explicar o processo acima: Seguindo a ordem do processo, a leitura do código é iniciada com o Try tetando executar a função acima que foi apenas salvada em memória (ou seja, linha 82 até 85, estamos apenas informando ao js qual é a nossa função. Após isso, caso a função não consiga ser executada, como nós utilizamos o Throw em nossa função, ele terá o papel de disparar um erro com a mensagem "nome é obrigatório". Como nós estamos utilizando o Try..Catch junto do Throw, a disparada de erro do Throw, será capturado pelo Catch e liberando a função ou o código para que continuem a ser executados. Então aquele console.log da linha 91, é executado graças a capturada o erro pelo Catch! 
