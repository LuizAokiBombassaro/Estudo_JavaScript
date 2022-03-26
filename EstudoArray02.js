const nomes = ['Cleber', 'João', 'Maria', 'Carlos', 'Luiz', 'Henrique', 'Mathias', 'Coronel', 'Policial', 'Capitão', 'Tenente', 'Henrique',]
console.log(`Objetivo: dividir os nomes em 2 salas: ${nomes}`);

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2)

console.log(`Sala 1 ${sala1}`);
console.log(`Sala 2 ${sala2}`);