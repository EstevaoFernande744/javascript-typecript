/*
function meuEscopo(){
    const form = document.querySelector('.form')    



form.onsubmit = function(evento){            ---------- uma forma de fazer
    
    evento.preventDefault()
    alert(1)
    console.log('Foi enviado!')
    }
}
*/

function meuEscopo(){
    const form = document.querySelector('.form') // puxando o form do documento
    const resultado = document.querySelector('.resultado') // criando o epaço para jogar os dados

    const pessoas = [] // vetor para  guardar as pessoas

    // let contador = 1
    function recebeEventoForm(evento){
       evento.preventDefault()
    //    console.log(`Form não foi enviado ${contador}`)
    //    contador++
        const nome = form.querySelector('.nome')  // pegando os dados do paragrafo p, nome
        const sobrenome = form.querySelector('.sobrenome') 
        const peso = form.querySelector('.peso') 
        const altura = form.querySelector('.altura') 

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`
        resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`
        resultado.innerHTML += `<p>Peso: ${peso.value}</p>`
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`
        

        }

        form.addEventListener('submit', recebeEventoForm) //
    }
    meuEscopo()


/*

const bomDia = function(nome){
    return `Bom dia meu amigo\(a\) ${nome}`
}

console.log(bomDia('Eduardo'))
console.log(bomDia('Estevão'))
console.log(bomDia('Monyk'))
console.log(bomDia('Marina'))
console.log(bomDia('Luan')) 

*/