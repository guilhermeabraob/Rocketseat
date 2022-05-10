
// #VARIÁVEIS E TIPOS DE DADOS

//Declaração or declaration
var name

//assignment or atribuição de valores
name = "Gui"

//que tipo de dado foi colocado na variável acima?

console.log(typeof name)

//agrupamento de declarações
let age 
isHuman = true 

// o que eu fiz na função log abaixo? eu apliquei multiplos argumentos
console.log(name, age, isHuman)

//escrita de Texto + Variáveis
console.log('o ' + name + ' tem ' + age + ' anos.')

//interpolando valores com template literals or template strings

console.log(`o ${name} tem ${age} anos. `)

// Object

const person = {
    name: 'Gui',
    age:  34,
    weight: 78,
    isAdmin: true,
}

//Para imprimir no Console: Gui tem 34 anos

console.log (`${person.name} tem ${person.age} anos`)

//Aray

const animals = [
'Lion' //posição 0
'Monkey' //posição 1
'Cat' //posição2
]

console.log('animals[2]')
console.log('animals.length') //para saber a quantidade de elementos em um Array