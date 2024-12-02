const pessoa = {
  nome: 'Estevão',
  sobrenome: 'Fernandes',
  idade: 26,
  sexo: 'Masculino',
  endereço: {
    país: 'Brasil',
    estado: 'Rio Grande do Norte',
    cidade: 'Apodi',
    rua: 'Baixa da Alegria',
    bairro: 'Centro',
    numero: 123
  }  
};


// const nome = pessoa.nome;
const { idade } = pessoa;  // atribuição via desestruturação
const {nome, sobrenome, altura} = pessoa;

console.log(nome, pessoa.sobrenome, idade);

console.log(nome, sobrenome, idade, altura); /* caso coloquemos um valor que não foi atribuido */

// mas podemos setar um valor nesse caso 

const { peso = 'Não sei'} = pessoa;

console.log(peso)

// Atribuição via desestruturação

const { endereço: { rua: r, país }, endereço} = pessoa;
console.log(r, país, endereço);


const { sexo, ...resto} = pessoa;
console.log(sexo, resto);