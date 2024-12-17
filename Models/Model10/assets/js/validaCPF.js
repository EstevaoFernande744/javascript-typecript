class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable:true,
            configurable:false,
            value:cpfEnviado.replace(/\D+/g, '')
        })
        // this.cpf = cpf.replace(/\D+/g, ''); // Remove caracteres não numéricos
    }

    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
      }
    
      geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
      }
    
      static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
    
        for(let stringNumerica of cpfSemDigitos) {
          total += reverso * Number(stringNumerica);
          reverso--;
        }
    
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
      }

    /*
    valida() {
        if (!this.cpf || this.cpf.length !== 11) return false;
        // Aqui, você pode adicionar a lógica de validação do CPF.
        return true; // Para simplificar o exemplo
    }
    */

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequência()) return false;
        this.geraNovoCpf();
    
        return this.novoCPF === this.cpfLimpo;
      }
}

// Exportar a classe para uso em outros arquivos, se necessário (em um ambiente Node.js ou módulo ES6)
// module.exports = ValidaCPF;
