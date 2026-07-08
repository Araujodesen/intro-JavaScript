// comentario do jsva
// variavei são um espaço onde o programa guarda uma informação para poder usar depois
// no js, temos 3 formas de declarar uma variavél

// 1 - const - constante, não pode ser alterada depois de declarada

const nome = "João";
console.log(nome);

//redeclarando uma variável. é o ato de trocar o seu valor, ou seja, mudar o que ela guarda
// nome = "Maria"; // isso vai dar erro, pois a variável foi declarada como const

// o js é case sensitive, ou seja, ele diferencia letras maiúsculas de minúsculas (ECMA Script)
 //2 - let - variável que pode ser alterada depois de declarada

let nomeDaPessoa= "Maria";

//redeclarando a variável do tipo let
nomeDaPessoa = "Lucas";
console.log(nomeDaPessoa);

// 3 - var - variável que pode ser alterada depois de declarada, mas não é mais recomendada
var fruta = "Banana";
console.log(fruta);

// var é a forma antiga de se declarar variaveis no js, mas normalmente evitamos usar em códigos modernos, pois ela tem algumas peculiaridades que podem gerar problemas no código.

