

const Alunos = ['Carla', 'Mauro', 'Henrique', 'Claudia']
const NotaAlunos = [10, 2, 6, 5.999]
const Media = 6

const Reprovados = Alunos.filter((Aluno, indice) => NotaAlunos[indice] < Media)

console.log(`Reprovados: ${Reprovados}`)

const Aprovados = Alunos.filter((Aluno, indice) => NotaAlunos[indice] >= Media)

console.log(`Aprovados: ${Aprovados}`)
