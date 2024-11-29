// Capturar         

const form = document.querySelector('#form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const inputPeso = event.target.querySelector('#ipeso')
    const inputAltura = event.target.querySelector('#ialtura')
    const  peso = Number(inputPeso.value)
    const  altura = Number(inputAltura.value)

    if (!peso){ // se o peso for invalido
        setResultado('Peso inválido!', false) // vou apresentar a mensagem
        return // vou parar minha função
    }

    if (!altura){ // se o altura for invalido
        setResultado('Altura inválida!', false) // vou apresentar a mensagem
        return // vou parar minha função
    }   

    const imc = getImc(peso, altura) // puxando imc
    const nivelImc = getNivelImc(imc) // puxando nivelImc

    const msg = `Seu IMC é ${imc} (${nivelImc})` // msg para falar 

    setResultado(msg, true) // flag para falar se foi verdadeiro ou não

})  


  function getNivelImc (imc) {  // usar as frases
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }


  function getImc (peso, altura) { // função para calcular o imc
    const imc = peso / altura ** 2;  // calculo sendo salvo na variavel imc
    return imc.toFixed(2);   // obtendo o valor do imc com duas casas decimais 
  }

  function criaP (){
    const p = document.createElement('p') // criando um paragrafo em javascript "um paragrafo"
    //p.classList.add('paragrafo-resultado') // fiz uma class para o paragrafo
    return p
    }   



  function setResultado(msg, isValid){ // função para escrever o resultado
    const resultado = document.querySelector('#resultado') /* esta pegando o id resultado */
    resultado.innerHTML = '' // zerando o resultado no html  
    const p = criaP() // salvando a função criaP em p

    if (isValid) {
        p.classList.add('paragrafo-resultado'); // resultado valido
    } else {
        p.classList.add('bad'); // resultado não valido
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
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