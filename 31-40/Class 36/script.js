// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). retorne true se a imagem estiver no modo paisagem.

let height = 100;
let width = 120;

function ePaisagem(height, width){
     return height < width // ? true : false; não precisamos dessa linha

    /*  jeito longo
    if(height < width){
        return true
    } else{
        return false
    }
    */
}


console.log(ePaisagem(height, width));



const paisagem = (height, width) => height < width  // ? true : false;

console.log(paisagem(height, width))

// criar variavel = função => condição ? verdade : mentira

