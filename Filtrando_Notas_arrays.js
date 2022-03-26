
const Alunos = ['Carla', 'Mauro', 'Henrique', 'Claudia']
const NotaAlunos = [10, 2, 7, 4]

const Reprovados = Alunos.filter((Aluno, indice) => NotaAlunos[indice] < 5)

console.log(`Reprovados: ${Reprovados}`)
