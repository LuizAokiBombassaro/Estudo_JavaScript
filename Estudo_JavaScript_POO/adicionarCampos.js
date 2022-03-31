
const cliente = {
    nome: "Luiz",
    idade: 36,
    cpf: "04946132052",
    email: "Luiz@gmail.com"
}

console.log(cliente);

cliente.fone = "(51)98423-4847"

console.log(cliente)

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

console.log(objPersonagem.aliado)

delete objPersonagem.aliado

console.log(objPersonagem.aliado)