
// Array
const alunos = ['João', 'Cleber', 'Ana', 'Maria', 'Carla', 'Luiz', 'Julia']

const MediaDosAlunos = [6, 7, 6, 6, 8, 7, 10]

let ListarNotasEAlunos = [alunos, MediaDosAlunos]

function ExibeAlunosENotas(NomeDoAluno) {
    if (ListarNotasEAlunos[0].includes(NomeDoAluno)) {
        let indice = ListarNotasEAlunos[0].indexOf(NomeDoAluno)
        return ListarNotasEAlunos[0][indice] + ', sua média é ' + ListarNotasEAlunos[1][indice]
    }
    else {
        return "Aluno não está cadastrado."
    }
}

console.log(ExibeAlunosENotas("Carla"))