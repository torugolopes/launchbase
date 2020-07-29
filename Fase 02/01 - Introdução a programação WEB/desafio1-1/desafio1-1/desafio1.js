//Calculo IMC
const pessoa = {
  nome: "Victor",
  peso: 105,
  altura: 1.86,
};

function calcularIMC(pessoa) {
  pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);
  console.table(pessoa);
}

function retornaObeso(pessoa) {
  if (pessoa.imc >= 30) {
    console.log(`${pessoa.nome}, você está obeso(a)`);
  } else {
    console.log(`${pessoa.nome}, você não está obeso`);
  }
}

calcularIMC(pessoa);
retornaObeso(pessoa);
