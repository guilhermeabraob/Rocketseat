//VARIÁVEIS

/*

*Nomes simbólicos para receber valor
*Atalhos de código
*Identificadores
*3 palavras reservadas para criar uma variável
    *var
    *let
    *const (não muda de valor)

--------

* o JS é  uma linguagem, que por natureza, é FRACAMENTE TIPADA e DINÂMICA, ou seja, as variáveis não recisam ter um tipo previamente definido e podemos mudar o coteúdo da variáve. 

Ex de um código FORTEMENTE TIPADO:
let clima:String = ""

explicação: a gente tipou o codigo fortemente como String, caso eu terminasse aquele codigo com um valor do tipo Boolean, nós teríamos problemas. 

---------

#SCOPE (ESCOPO)

*há escopos visíveis e os invisíveis. 

*Escopo determina a visibilidade de alguma variável no JS. 

#BLOCK STATEMENT 
*Statment = declaração

* Iniciando um bloco:

{
    aqui dentro é um bloco e eu posso colocar qq codigo
}

* o Bloco também criará um novo Escopo, chamado, Block-Scoped

---------

#VAR
*HOISTING = Elevação
O conceito Elevação significa que o JS qndo ler a variavel Var, pegara a Var de dentro do escopo e elevara ela acima. 

*Var é GLOBAL, possui o conceito Hoisting, portanto, poderá funcionar dentro ou fora de um bloco. O que está dentro daquele bloco ao meio, é LOCAL, e tudo que está dentro da tag <script> é GLOBAL.

*O JS faz a leita da aplicação de cima para baixo de forma verticalmente. 

Ex: No html:

<script>

console.log('> existe X antes do bloco?', x)

{
    var x = 0
}

</script>

--------

#CONST E LET
*Const e Let são variáveis que sófuncionam no escopo onde foram criadas. 

Ex: 

const y = 1;

{
    const y = 0
    console.log('>existe y antes do bloco?')
}

console.log('> existe y depois do bloco?')

*obs: O console.log dentro do escopo visivel ao meio irá rodar o cógido com a const y = 0. E o console.log fora do escopo visivel, irá rodar com a const y = 1, pois essa const está no escopo invisivel no mesmo escopo que o console.log que tb está fora. 

---------

#Variables Name

* JS é sensível, logo, letras maiusculas, minusculas, acentos, fazem diferencas

- Permitido:
* Iniciar com caracteres especiais
* Iniciar com letras
* colocar acentos

- Não Permitido:
* Iniciar com números
* Colocar espaços vazios no nome

- Ideal:
* Criar nomes que fazem sentido
* Que explique que a variável é ou faz
* camelCase
* snake_case
* Escrever em Inglês


*/
