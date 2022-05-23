// Estrutura de Repetição
// FOR

/*
for (let i = 0; i < 10; i++) {
    console.log(i)
} 
*/
//Explicando: For é usado para fazer um loop, uma repetição. Na sintaxe acima, iniciamos com o For que dá o comando de repetir, declaramos uma variável "i" por convenção, após isso, digitamos a condição que queremos(no ex acima, a condição é que i seja menor que 10), e no final, colocamos o comando de incremento de 1(++), ou seja, declaramos a variavel i com o valor 0, enquanto i for menor que 10, será incrementado 1. 

/*
for (let i = 10; i > 0; i--) {
    if(i===5) {
        break;
    }
    console.log(i)
}

console.log(i)

Explicando: Variavel i com valor de 10, enquanto i for maior que zero, subtraimos 1. Ou seja, i = 10, 10 é maior que 0 (condição), sim, então subtraimos um, 9 é maior que zero, sim, entao subtraimos 1, e assim vai. 
Obs: o BREAK serve para pausar o código, no ex acima, o if informa que quando o i chegar no valor 5, o código será pausado. 
*/

/*
for(let i = 10; i > 0; i--) {
    if(i===5) {
        continue;
    }
    console.log(i)
}


Nesse ex acima, o CONTINUE serve para pular o número que temos ali no if. 
*/

//WHILE

/*
let i = 0
while(i < 10) {
    console.log(i)
    i++;
}

Explicação: Mesmo coisa que o For, devemos usar o While, quando o i não vai parar. 

//For... of

/* 
let name = 'Gui'
let names = ['Gui', 'Pedro', 'Marcella']

for(let char of name) {
    console.log(char)
}
Explicando: let char of name = pegue uma letra da variavel name, ficando assim no console:
G
U
I

*o char faz esse comando de pegar um caracter


for(let name of names){
    console.log(name)
}
Explicando: let name of names = pego um nome da variavel names.
** o name faz esse comando de pegar o nome.

No console:
Gui
Pedro
Marcell
*/

//For...in = O For In, vai fazer um loop em cima de um objeto. 

/*
let person = {
    name: 'Gui',
    age: 34,
    weight: 78.0
}

for(let property in person) {
    console.log(property)
}
Explicando: for(let propoerty in person) = no objeto person, pegue a propriedade e atribua a variavel let.
No console fica assim:
name
age
weight

* Para acessar uma propriedade especifica, podemos fazer assim:

for(let property in person) {
    console.log(property)
    console.log(person.name)
}

OU ASSIM:

let person = {
    name: 'Gui',
    age: 34,
    weight: 78.0
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}

*/



