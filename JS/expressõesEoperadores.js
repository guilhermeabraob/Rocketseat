//#EXPRESSOES E OPERADORES

/* - Expressions
   - Operators
        *Binary
        *Unary
        *Ternary
*/

// Expressions
// - New: Conhecida como left-hand-side expression. Serve para criar um novo objeto. 

let age = new Number(34)
console.log(age)

//Operadores Unários
// - Typeof: indica qual tipo de dado
// - Delete: deleta uma propriedade de dentro de um objeto. Ex:

const person = {
    name: 'Gui',
    age: 34,
}

delete person.age
 console.log(person)

 //Operadores Aritiméticos

 //multiplicação 
 console.log(3*3)
 //divisão
 console.log(4/2)
 //exponencial 
 console.log(3**3)//resultado = 27

 //resto da divisão
 let remainder = 11 % 3// remainder = resto
//resultado = 2, pois depois de dividir 11 por 9, sobra 2. 

//incremento
let increment = 0
increment++ // incremento sempre adicionará 1 // resultado = 1, pois tinhamos 0, adicionamos 1

//decrement
let decrement = 0
decrement-- //sempre reduzirá 1. 

//Grouping operator ( ), os parênteses dão preferência para os que estão dentro dele. 

let total = (2+3) * 5

//Operadores de Comparação

// == igual a
// != diferente de 
// === estritamente igual a. Aqui, comparamos tanto o valor, como também, o tipo do dado. Ex:
let one = 1 // a var one recebe o valor de 1. 
console.log(one === '1') //resultado = False, pois one tem valor 1 (numerico) e o console ta comparando 1 numerico com 1 (string)

// !== estritamente diferente de

// >= maior que
let one = 1
console.log(one >= 1) // resultado = true, pois o one não é maior, mas ele é igual a 1. 

----------

//Operadores de Atribuição (assignment)

//assignment
x = 1
//addition assignment
x += 2
console.log(x) //resultado = 3, pois esse metodo de adicionar na atribuição é a mesma coisa que escrever: x = x + 2

//subtraction assignment 
x -= 2 
//multplication assignment
x *= 2
//division assignment
x /= 2 
//remainder assignment
x %= 2
//exponentiation
x **= 2

------

// Operadores Lógicos
// And &&
// Or ||
// Not ! , aqui se vc negar algum dado, voce mudara o valor desse dado, se era true, passa a ser false, e vice-versa.  

--------

//Operador Condicional

//Condition = condição
// ? = então
// : = se não

//Estrutura. condition ? value 1 : value 2. Obs: Leitura, se a contição for respeitada, teremos um valor verdadeiro, caso contrário, teremos falso. 

-------

//Operador de String (String Operator)
// - comparison (comparação)
console.log ('a' == 'a')

//concatenation
let alpha = 'alpha'
alpha += 'beta'

console.log(alpha + 345) // resultado alphabet345

---------

// Falsy e Truthy
// Falsy: Quando um valor é considerado false em contextos em que um booleano é OBRIGATÓRIO. (condicionais e loops) 

/*

Vai ser considerado False: 
0
-0
""
null
undefined
NaN

*/
//Ex:
console.log( null ? 'true' : 'false' ) // aqui o null é considerado falsy

/*Truthy: Quando um valor é considerado treu em um contexto em que o booleano é obrigatório. 

true:
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity

*/

---------

// Precedencia dos Operadores (Operator Precedence)

/*
-grouping ( )
-negação e incremento ! ++ --
-muliplicaçã e divisão * /
-adição e subtração + -
-relacional < <= > >=
-igualdade == != === !==
-and &&
-or ||
-condicional ? : 
-assignment = += -= *=

*/
