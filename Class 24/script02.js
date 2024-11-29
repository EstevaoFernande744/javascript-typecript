function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const secund = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${secund}`;
}


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)

// Dia ficticio para testes;

const data1 = new Date(2019, 3, 2, 1, 4, 7);
const dia1 = zeroAEsquerda(data1.getDate());
const mes1 = zeroAEsquerda(data1.getMonth() + 1);
const ano1 = zeroAEsquerda(data1.getFullYear());
const hora1 = zeroAEsquerda(data1.getHours());
const min1 = zeroAEsquerda(data1.getMinutes());
const secund1 = zeroAEsquerda(data1.getSeconds());

console.log(`${dia1}/${mes1}/${ano1} ${hora1}:${min1}:${secund1}`)