const IdadeMinima = 18;
const IdadeCliente = 16;

if (IdadeCliente >= IdadeMinima) {
    console.log("Entra");
}
else {
    console.log("Sai");
}
//condição                //caso true //caso false
console.log(IdadeCliente >= IdadeMinima ? "Entra" : "Sai");

const nome = "Luiz";
const idade = 2022 - 2002;
const cidadenascimento = "Porto Alegre (RS)";

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidadenascimento}`;

console.log(apresentacao);