const notas = [10, 6, 8]

//notas.push() nos permite inserir um valor na última posição da array.
notas.push(7);

console.log("Notas dos alunos: " + notas);

console.log("Objetivo: calcular a média usando array.")

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`Média dos alunos: ${media}`);

console.log("Objetivo: remover a última nota usando notas.pop().")

notas.pop()
console.log("Novas notas dos alunos: " + notas)

media = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log(`Nova média dos alunos: ${media}`);