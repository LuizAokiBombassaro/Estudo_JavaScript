const notas = [10, 9, 8, 7, 6]

const NotasAtualizas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(NotasAtualizas)

const nomes = ["Ana Julia", "Caio", "Robson", "Carlos"]

const NomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(NomesAtualizados)