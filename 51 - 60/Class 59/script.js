const pessoas = { // Geral
    pessoa1: { nome: 'Estevão',
    sobrenome: 'Fernandes',
    idade: 26},     
}

console.log(pessoas)
console.log(pessoas.pessoa1['nome'])


const pessoasIf = new Object(); // Construtor
    pessoasIf.nome = 'Jordanna'; 
    pessoasIf.sobrenome = 'Lima'    
    pessoasIf.idade =  23
    pessoasIf.falarNome = function() {
      return `${this.nome} esta falando seu nome.` // falar o proprio nome com o this
    };
    pessoasIf.getDataNascimento = function(){ // functions dentro de objects são metodos
        const dataAtual = new Date() // criei a data
        return dataAtual.getFullYear() - this.idade; // usei o ano atual - a idade 
    }

// delete pessoasIf.nome;

console.log(pessoasIf.falarNome());

console.log(pessoasIf.nome)
console.log(`${pessoasIf.nome} nasceu no ano de ${pessoasIf.getDataNascimento()}`)


/*
for (let chave in pessoasIf){
    console.log(chave)
    console.log(pessoasIf[chave])
}
*/