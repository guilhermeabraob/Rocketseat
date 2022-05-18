//DESAFIO

/* 1) Crie um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B 
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

let nota = 70

if(nota >= 90) {
    console.log('A')
} if else(nota >= 80 && nota <= 89) {
    console.log('B')
}  else {
    console.log('C')
}