/* shift + alt + a */
/* É uma estrutura de repetição ou loop é ua estrutura que faz um bloco de código ser executado várias vezes*/

// pricipais laços de repetição
/*  1 - for = ultiizamos esse laço de repetição quando sabemos quantas vezas desejamos repetir algo

for(início; condição incremento){
    // código a ser executado 
    }
*/

for(let i = 0; // começa em 0
    i < 5; // funciona enquanto isso for verdadeiro
    i ++ // aumenta +1 a cada volta
    ){
    console.log(i) // mais rcomendado
}

// exemplo de laço de repetição com tabuada
let numeroDaTabuada = 9

for(let i = 1; i <= 10; i++){
    // "Olá" + "Cristine" + "Manja muito" + "De" + "JavaScript"
    console.log(`${numeroDaTabuada} x ${1} = ${numeroDaTabuada * i}`)
}

// 2 - laço while = é um laço de repetição que executa um bloco de código ENQUANTO uma condição for verdadeira
// Utilizamoso While (enquanto) quando você não sabe quantas vezes precisa repetir

/* 
while(condição){
   // código a ser executado
}
*/

// 1 - criar variavel de controle
let i = 0
while (i<5){
    console.log(i)

    // 2 - atualizar a vaiavel de controle
    i ++;
}

// exemplo d eum sistema de login
let senha = prompt("Digite a senha:")

while(senha !== "1234"){
    senha = prompt("Senha incorreta. Tente novamente: ")
}

// 3 - do...while - parecido com o while, mas com uma diferença imporante. No do..while o código sempre executa pelo menos uma vez antes de verificar a condição

/* 
do { 
     // código a ser executado
} while (condição)

*/

// 1 - criando a variável de controle
let numero = 1

do { 
    console.log(numero)
    // 2 = atualizando a variável de controle
    numero++
} while (numero < 2)

// exemplo com menu de opções
let opcao

do { 
    console.log("1 - ver saldo")
    console.log("2 - sair")

    opcao = 2
}while(opcao !== 2)