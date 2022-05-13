//# MANIPULANDO DADOS

/* 
* Prototype (prototipos = aquilo que foi criado antes)
    * O JS é prototype-based language
    * prototype chain (cadeia de prototipos)
    * __proto__
*/

// A maioria dos dados em JS possuem prototipos, ou seja, mesmo que criamos um objeto vazio, esse objeto vazio, puxará propriedades e metodos de outro objeto. 

-----------

//#Type Conversion and Type Coersion

//#Type Conversion, nós podemos alterar o tipo do dado, usando uma função específica. 

//#Type Coersion, é quando o próprio JS altera o tipo do dado de forma coercitiva. 

-----------

//Manipulando String e Numeros

//Transformando String em Número

let string = '123'
console.log(Number(string))

//Transformando Número em String
//ATENÇAO: TIPO NUMBER TEM A COR DIFERENTE DE STRING. O NUMBER É NORMALMENTE ROXO NO CONSOLE. 

let Number = 321
console.log(String(number))

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número. 

let word = 'paralelepipedo'
console.log(word.length)

//para saber quantos dégitos tem um número, devemos primeiramente transformá-lo em uma string, pois Número não funciona com o Length.

let number = 123
console.log(String(number).length)

//Transformando número quebrado com 2 casas decimais e trocar PONTO por VÍRGULA. 

let number = 121.31239124832
console.log(number.toFixed(2).replace('.', ','))

//Transformar letras em tudo minusculas ou vice-versa. 

let word = 'programar é muito legal!'
console.log(word.toUpperCase())
confirm.log(word.toLowerCase())