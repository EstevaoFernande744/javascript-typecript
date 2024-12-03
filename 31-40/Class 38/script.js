try {
    console.log(arquivo)
} catch(erro){
    console.log('Erro encontrado arquivo não existe!')
    // console.log(erro) nunca mostre os erros para o cliente
}

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error(' x e y precisam ser números.') //  erro padrão do JavaScript
    }

    return x + y;
}

try{
console.log(soma(10, 11))
console.log(soma(9, '10'))
} catch(erro){
    //console.log(error)
    console.log('Alguma coisa mais amigável pro usuário.')
}

