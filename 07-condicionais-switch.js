console.log("OI")
// document.body.innerHTML = "Teste"

// switch/case - 
// o swich é mais organizado quando você precisa verificar uma variável é igual a UM entre VÁRIOS VALORES

/*
switch(condição){
   case 1:
     // código do case 1

    case 2:
     // código do case 2
}

*/

let dia = 14

switch (dia) {
    case 14: 
      document.body.innerHTML = "Terça-feira"
      break// serve para impedir que o programa

    case 15:
        document.body.innerHTML = "Quarta-feira. Aula do Mago"
        break
    case 16:
        document.body.innerhtml = "Quinta=feira. Aula da Nivea"
        break

    default: // funciona como um plano b caso nenhuma das acima seja atendida
        document.body.innerHTML = "Data inválida"
}