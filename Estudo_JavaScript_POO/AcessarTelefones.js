const cliente = {
    nome: "Luiz",
    idade: 36,
    cpf: "04946132052",
    email: "Luiz@gmail.com",
    telefones: ["553219321", "421421421"]
}

cliente.telefones.forEach(fone => console.log("telefone: " + fone))