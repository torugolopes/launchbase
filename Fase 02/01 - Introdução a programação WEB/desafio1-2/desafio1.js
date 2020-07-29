const empresa = {
  nome: "Rockeseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260,
  },
};

function imprimeLocalizacaoEmpresa(empresa) {
  console.log(
    `A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`
  );
}

imprimeLocalizacaoEmpresa(empresa);
