//Calculo aposentadoria
const pessoa = {
  nome: "Victor",
  idade: 100,
  sexo: "M",
  contribuicao: 40,
};

function calculoAposentadoria(pessoa) {
  if (pessoa.contribuicao >= 35) {
    if (pessoa.sexo == "M" && pessoa.idade >= 95) {
      console.log(`${pessoa.nome}, você pode se aposentar!`);
    } else if (pessoa.sexo == "F" && pessoa.idade >= 85) {
      console.log(`${pessoa.nome}, a senhora já pode se aposentar`);
    }
  } else {
    console.log("Você ainda não pode se aposentar");
  }
}

calculoAposentadoria(pessoa);
