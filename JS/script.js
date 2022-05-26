//DESAFIO

/* 1) Crie um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B 
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

/*
function getScore(nota) {
    let A = nota >= 90
    let B = nota >= 80 && nota <=89
    let C = nota >= 70 && nota <=79
    let D = nota >= 60 && nota <=69
    let F = nota < 60
    

    if (A) {
        console.log('A')
    } else if(B) {
        console.log('B')
    } else if(C) {
        console.log('C')
    } else if(D) {
        console.log('D')
    } else {
        console.log('F')
    }
    
}

console.log(getScore(100))
console.log(getScore(-1))
console.log(getScore(45))
console.log(getScore(75))
console.log(getScore(62))
console.log(getScore(82))
console.log(getScore(92))
console.log(getScore(5))
console.log(getScore(52))
*/

// 2) Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//      - receitas:
//      - despesas: 
// Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo. 

/

let family = {
    incomes: [2500, 1000, 5000],
    expenses: [-1000, -500, -1000]
}

//Essa função apenas percorrerá todos elementos de cada array das propriedades da variavel family acima.
function getArraySum(valuesArray) {
    let total = 0
    for(let i = 0; i < valuesArray.length; i+=1) {  
        let currentValue = valuesArray[i]
        total = total + currentValue // = total += currentValue 
    } 
    return total 
}

// i = index = indice, todo array tem um indice, seguindo o exemplo acima, no array do Incomes, 2500(family.incomes[0]), o i é o que vai percorrer o array! Entao, explicando a linha 59, primeiramente, devemos declarar o i, apos isso, temos a condição: i < valuesArray.length (o length tem o proposito de fazer o condição passar por todo array, por todos os elementos). No final da linha 59, o i+=1, significa que será acrescentado 1, quando o i percorrer de um elemento para o outro dentro do array. 

//linha 61. NA LINHA 61 é onde está acontecendo a soma. Primeiro, nos declaramos let total = 0, depois na linha 61, a gente informou que o total recebe o 0(total declarado na 58) + o currentValue. E assim fazemos a soma do array. 


function balance(objCookies) {

    const totalIncomes = getArraySum(objCookies.incomes) // = 2500 + 1000 + 5000= 8500

    const totalExpenses = getArraySum(objCookies.expenses) // = -1000 + -500 + -1000 = -2500

    const balance = totalIncomes + totalExpenses // = 8500 + (-2500) = 6000 

    let description

    if (balance < 0) {
        description = 'negativa'
    } else if (balance == 0) {
        description = 'estavel'
    } else {
        description = 'positiva'
    }
    const result = {
        balance,z
        description
    }
    return result
}

const balanceResult = balance(family)
console.log('saldo da família é', balanceResult.balance, 'e a situação é', balanceResult.description) 
console.log(balance(family))
// Os PARAMETROS serverm para nos abstrairmos a complexidade de uma função. 

*/

-----------

//3) Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra. 

// C = (F - 32) * 5/9
// F = C * 9/5 + 32



//FUNÇAO QUE CALCULA A MEDIA DE UM ARRAY

/*
let numeros = [1,2,3,10,5,5,5,5,]
 
function media(nums) {
  let tam = nums.length;
  let soma = 0;
  for(var i = 0; i<tam; i++){
    soma+=nums[i]
  }
  return Math.round(soma/tam);
}

console.log (media(numeros))

