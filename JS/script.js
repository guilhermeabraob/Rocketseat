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

-------

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número. 

let word = 'paralelepipedo'
console.log(word.length)

//para saber quantos dégitos tem um número, devemos primeiramente transformá-lo em uma string, pois Número não funciona com o Length.

let number = 123
console.log(String(number).length)

//Transformando número quebrado com 2 casas decimais e trocar PONTO por VÍRGULA. 

let number = 121.31239124832
console.log(number.toFixed(2).replace('.', ','))

---------

//Transformar letras em tudo minusculas ou vice-versa. 

let word = 'programar é muito legal!'
console.log(word.toUpperCase())
confirm.log(word.toLowerCase())

//Verificar se o texto contém a palavra: Amor.

let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("Amor"))

---------

//Separar um texto que contem espaços em um novo ARRAY onde cada texto é uma posição do array. 
let phrase = 'Eu quero viver um novo amor'
let myArray = phrase.split(" ") //aqui dentro do parenteses tem um espaço entre as aspas, significando que a frase sera separada por espaços. 

//Substituir os espaços do array por underscore ( _ )
let phrasesWithUnderscore = myArray.join('_')

---------

//Criando Array com construtor
let myArray = new Array('a', 'b', 'c')

//Contando os Elementos de um ARRAY. Obs: No ARRAY, podemos inserir qualquer tipo de dado. No ex abaixo, temos uma string, um objeto e uma função. 

console.log([
    'a', {type: 'array'}, 
    function () {return 'alo'}
].length[2]) //dentro dessas ultimas conchetes, escolhemos o 2 para ver quem esta na posição 2 dentro do aray, poderia ser qualquer posição. 

--------

// Transformando uma cadeia de caracteres em elementos de um Array. 

let word = "manipulação"
console.log(Array.from(word))

---------


//Manipulando Array
let techs = ['html', 'css', 'js']

//Adicionar um item no fim
techs.push('nodejs')
//Adicionar no começo
techs.unshift('sql')
//remover do fim
techs.pop('nodejs')
//remover do começo
techs.shift('sql')
//pegar somente alguns elementos do array
console.log(techs.slice(1,3)) // o (1) de dentro do parenteses indica qual pedaço voce quer retirar do array, e o (3), indica até qual elemento você quer que mantenha. Atenção! Aqui é o elemento, e não a posição. 

//remover um ou mais itens em qualquer posição do aray
techs.splice(1,2)
//encontrar a posição de um elemento dentro do array
let index = techs.indexOf('css')