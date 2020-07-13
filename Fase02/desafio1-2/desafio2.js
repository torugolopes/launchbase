const programador = {
  nome: "Victor",
  idade: 29,
  tecnologias: [
    { nome: "Javascript", especialidade: "Web/Mobile" },
    { nome: "C++", especialidade: "Desktop" },
    { nome: "Python", especialidade: "DataScience" },
  ],
};

function imprimeNomeEPrimeiraTecnologia(programador) {
  console.log(
    `O usuário ${programador.nome} tem ${programador.idade} é usa a tecnologia ${programador.tecnologias[0].nome}, especialista em ${programador.tecnologias[0].especialidade}!`
  );
}

imprimeNomeEPrimeiraTecnologia(programador);
