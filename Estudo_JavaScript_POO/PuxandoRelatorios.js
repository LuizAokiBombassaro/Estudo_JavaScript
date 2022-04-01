const cliente = {
    nome: "José",
    idade: 39,
    cpf: "04946132052",
    email: "jose@gmail.com",
    telefones: ["553219321", "421421421"],
    dependentes: [
        {
            nome: "Sara",
            parentesco: "Filha"
        },
        {
            nome: "Samia Maria",
            parentesco: "Filha"
        }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}

let relatorio = "";

for (let dados in cliente) {
    if (typeof cliente[dados] === "object" || typeof cliente[dados] === "function") {
        continue
    } else {
        relatorio += `${dados}: ${cliente[dados]} `
    }
}

console.log(relatorio);
