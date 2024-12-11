// 705.484.450-52 / 070.987.720-03

/*

7x 0x 5x 4x 8x 4x 4x 5x 0x pegamos os 9 valores e multiplicamos por 10! - 1! ou sejá de 10 a 2
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0
11 - (237 % 11) = 5 (Primeiros dígitos)

se o digito for maior que 9, consideramos 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x os 9 mais o primeiro digito de 11! - 1!
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10

11 - (284 % 11) = 5 (Segundo dígito)

*/

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',  { 
        enumerable:true, // mostra as propertys do object
        get: function(){
            return cpfEnviado.replace(/\D+/g, ''); // remove os simbolos do cpf
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;  // n pode esquecer o this
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2) // pega os 9 digitos do cpf
    const digito1 = this.criaDigito(cpfParcial) // chama a função criadigito e aplica no array cpfParcial
    const digito2 = this.criaDigito(cpfParcial + digito1)
    // onsole.log(digito2)

    const novoCpf = cpfParcial + digito1 + digito2;
    
    // console.log(novoCpf)

    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    // console.log(cpfArray)
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acm, val) => {
        // console.log(regressivo, val, regressivo * val)
        acm += (regressivo * Number(val))
        regressivo --;
        return acm;
    }, 0)
    // console.log(total)
    digito = 11 - (total % 11); // faz a conta e obtem o digito
    return digito > 9 ? '0' : String(digito) // se o digito < 9 substitua por 9, se menor, mantenha o número
    // console.log(digito)
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length) // caso o valor repita varias vezes
    return sequencia === this.cpfLimpo; // vai validar como sendo falso
}

const cpf = new ValidaCPF('705.484.450-52'); // cpf de entrada


//console.log(cpf, cpf.cpfLimpo)

if(cpf.valida()){
    console.log('CPF Valido!')
} else {
    console.log('CPF Invalido!')
}


// console.log(cpf.valida())
