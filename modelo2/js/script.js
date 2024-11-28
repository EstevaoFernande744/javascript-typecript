// Capturar         

const form = document.querySelector('#form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Evento Previnido')
    setResultado('Olá Mundo!')
})

function setResultado(msg){ // função para escrever o resultado
    const resultado = document.querySelector('#resultado') /* esta pegando o id resultado */
    resultado.innerHTML = msg /* estou dizendo que minha variavel resultado vai fazer uma mensagem*/
}

/*
- esse form. = elemento do formulario
- addEventListener('evento que sera ouvido',  função que vai acontecer ao ser chamada())
- function(event) é uma função com o parametro evento 
- event.preventDefault() serve para previnir que o evento aconteça.
*/

/*
let peso = document.getElementById('ipeso')
let altura = document.getElementById('ialtura')

function calculoIMC(){
    let IMC = peso / (altura ** 2)
    return 
}

*/