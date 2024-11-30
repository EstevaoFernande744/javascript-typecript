/*

------------------ JEITO DE CORNO ------------------

const p1 = document.querySelector('#primeiro') // pegando a seção e o paragrafo
const p2 = document.querySelector('#segundo')
const data = new Date(); // data atual 


function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto; // break
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Digite um dia valido'
            return diaSemanaTexto;  
    }
}

function getNomeMes (numeroMes){
    let nomeMes;
    switch (numeroMes){
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes; // break
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
        default:
            nomeMes = 'Digite um mês valido'
            return nomeMes;  
    }
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}


function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    
    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()}`)
}

function criaHora(data) {
    return `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
}

p1.textContent = criaData(data);
p2.textContent = criaHora(data);

*/

/*

---------------- JEITO INTELIGENTE -----------------

const p1 = document.querySelector('#primeiro') // pegando a seção e o paragrafo
const p2 = document.querySelector('#segundo')
const data = new Date(); // data atual 

p1.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: 'full'});
p2.innerHTML = data.toLocaleTimeString('pt-br', {timeStyle: 'short'});
*/


/*
------------------ JEITO QUE SERVE -----------------
*/

const p1 = document.querySelector('#primeiro') // pegando a seção e o paragrafo
const p2 = document.querySelector('#segundo')
const data = new Date(); // data atual 

function getNomeMes(numeroMes){
    const meses = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes]

}

function getDiaSemana(diaSemana){
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return dias [diaSemana]
}

p1.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: 'full'});
p2.innerHTML = data.toLocaleTimeString('pt-br', {timeStyle: 'short'});