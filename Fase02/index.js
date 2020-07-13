function marcarComoReprovado(alunos) {
  for (let aluno of alunos) {
    aluno.reprovado = false;
    if (aluno.nota < 6) {
      aluno.reprovado = true;
    }
  }
  console.table(alunos);
}

function mensagemAlunoReprovado(alunos) {
  for (let aluno of alunos) {
    if (aluno.reprovado) {
      console.log(`Aluno: ${aluno.nome} está reprovado`);
    }
  }
}

const alunosTurmaA = [
  { nome: "Victor", nota: 9 },
  { nome: "Yuri", nota: 9.2 },
  { nome: "Marcelo", nota: 4 },
];

marcarComoReprovado(alunosTurmaA);
mensagemAlunoReprovado(alunosTurmaA);
