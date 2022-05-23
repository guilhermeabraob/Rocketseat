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

let family {
    incomes: [2500, 1000, 5000],
    expenses: [-1000, -500, -1000]
}



function balance() {
    if ( incomes + expenses < 0) {
        return 'loss'
    } else if (incomes + expenses == 0) {
        return 'stable'
    } else {
        return 'profit'
    }
}

console.log(balance(incomes + outcomes))


