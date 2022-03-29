


const cliente = {
    nome: "André",
    idade: 36,
    cpf: "049.150.461-15",
    email: "andre1@outlok.com"
}

console.log(`Nome do cliente: ${cliente.nome}, idade: ${cliente.idade}, cpf: ${cliente.cpf.substring(0, 3) + ".***.***-**"}`)