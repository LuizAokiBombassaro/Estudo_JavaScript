
const cliente = {
    nome: "Luiz",
    idade: 19,
    cpf: "049.150.461-15",
    email: "teste081@outlok.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log("Nome do cliente: " + cliente[chaves[0]])

chaves.forEach(informacao => console.log(cliente[informacao]))