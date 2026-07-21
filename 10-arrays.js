console.log("teste")
// Um array nada mais é do que uma estrutura de dados usada para armazenar vários valores em uma única variável

// cada item é organizado dentro da lista com uma POSIÇÃO especifica que chamamos de indice


const fruta1 = "maça"
const fruta2 = "banana"
const fruta3 = "uva"

// Ao invés de criar uma variável para cada item

const frutas = ["maça", "banana", "uva", "maracujá"]

// mostrando a lista completa
console.log(frutas)

// pegando um item específic da lista
console.log(frutas[2])

// ao tentar acessar um elemento que não existe na lista, ela os retorna undefined
console.log(frutas[4])

// descobrindo o tamanho do array
console.log(frutas.length)

// iterando sobre um array
// conhecendo o for...of
for(const fruta of frutas){
    console.log(fruta)
}

// trabalhando com o for tradicional

for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(element)
}

// exemplos de dados aceitos por um array
const dados = [
    10,
    "texto qualquer",
    true,
    {nome: "vinicius"},
    [1,2,3],
    undefined,
    null, 
]
console.log(dados)
console.log(dados[0])
console.log(dados[1])
console.log(dados[2])
console.log(dados[3])
console.log(dados[4])
console.log(dados[5])
console.log(dados[6])
console.log(dados[7])

// manipulando valores de um array
const pessoas = []

// mostrando o array vazio
console.log(pessoas)

// 1 - inserindo itens no array
// pessoas[2] = "Aline"

// Adiciona novos elementos ao final de um array e retorna o novo comprimento do array
pessoas.push("Aline")
pessoas.push("Magenta")
console.log(pessoas)

// 2 - removendo itens de um array
// pop - remove o último item do array
pessoas.pop
console.log(pessoas)
