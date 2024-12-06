// Factory Function (função fábrica)
// Constructor Function (função construtora)
function criaPessoa(nome, sobrenome, peso, altura){ // função comum
    return { // produção de um objeto
        nome,
        sobrenome,

        fala: function(assunto){ // criando a chave fala, recebendo parametro
            return `${this.nome} está falando sonbre ${assunto}.`;
        },

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') // transforma o nome em um vetor pelos espaços
            this.nome = valor.shift(); // primeiro valor sendo removido da variavel
            this.sobrenome = valor.join(' ') // joga o valor substituindo console.log

        },

        peso: peso,
        altura: altura,

        imc(){ // se eu usar get imc ele vai fingir que é um atributo!
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Estevão', 'Fernandes', 105, 1.66); // criando uma variavel que vamos passar a função 
console.log(p1.fala('Sobre JS')); // mostrar o objeto
console.log(p1.imc());

const p2 = criaPessoa('Jordanna', 'Lima', 70, 1.66);
console.log(p2.fala('Sobre JS')); // mostrar o objeto
console.log(p2.imc());

 // console.log(p1.nomeCompleto()) ----- SEM O GET
 console.log(p1.nomeCompleto, p2.nomeCompleto)
 p1.nomeCompleto = 'Estevão Fernandes Junior'; // salva o valor
 p2.nomeCompleto = 'Jordanna Lima de Oliveira'; // salva o valor
