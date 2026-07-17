// console.log("Teste")
// condição -  é uma exigencia, um requisito. Algo que precisa existir para que algo possa acontecer apartir dele ou sej aconsiderado verdadeiro

// as estruturas condicionais permitem que o programa tome decisões

// 1 - if/se simples
/* if(codição){
     código
}*/

if(false){
    console.log("SEJA BEM VINDO")
}

console.log("Depois do if")


// 2 - if..else - se não

let idade = 16
if (idade >= 18){
    console.log("Você é maior de idade")
} else {
    console.log("Você não é maior de idade")
}

let user = false
if (user === true) {
    console.log("Seja bem-vindo você")
} else {
    console.log("Usuário não conectado")
}

// 3 - if..else if - se/senão se

/*
if(condição){
    //código
} else if(outra condição){
     //código 
} else if(outra condoção){
     //código 
}  else uf(outra condição){
     //cóndição  
}

*/

// serve para testar várias condições
let nota = 7.4

if (nota >= 9){
    console.log("Exelente")
} else if(nota >= 7){
    console.log("Aprovado")
} else if(nota >= 4){
    console.log("Recuperação")
} else{
    console.log("Reprovado")
}
