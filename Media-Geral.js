const SalaJS = [7, 8, 8, , 7, 5, 3, 2, 5, 6, 7, 8]
const SalaJava = [6, 5, 7, 8, 9, 4]
const SalaPython = [6, 6, 6, 6, 6, 6]

function Media(NotasDaSala) {
    let SomaNotas = NotasDaSala.reduce((acumulador, ValorDoIndice) => ValorDoIndice + acumulador, 0)
    return SomaNotas / NotasDaSala.length
}

console.log(`Média da sala de JavaScript: ${Media(SalaJS)}`)
console.log(`Média da sala de Java: ${Media(SalaJava)}`)
console.log(`Média da sala de Python: ${Media(SalaPython)}`)

