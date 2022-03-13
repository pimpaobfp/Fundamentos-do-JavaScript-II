const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 7, 9, 6];

let listadeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listadeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listadeNotasEAlunos[0].indexOf(nomeDoAluno);
       return `${listadeNotasEAlunos[0][indice]}, sua média é ${listadeNotasEAlunos[1][indice]}`
    } else {
        return `O aluno ${nomeDoAluno} não está na lista!`
    }
}

console.log(exibeNomeNota('Ana'));
console.log(exibeNomeNota('Bruno'));
console.log(exibeNomeNota('Juliana'));
