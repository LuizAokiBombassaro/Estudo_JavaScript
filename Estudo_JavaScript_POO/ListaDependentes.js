const cliente = {
    nome: "José",
    idade: 39,
    cpf: "04946132052",
    email: "jose@gmail.com",
    telefones: ["553219321", "421421421"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha"
})

console.log(cliente.dependentes[0])

const FilhaMaisNova = cliente.dependentes.filter(dependente => dependente.nome === "Samia Maria")

console.log(FilhaMaisNova[0])