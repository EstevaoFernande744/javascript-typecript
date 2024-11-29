const hora = -2

if (hora >= 0 && hora < 5){
    console.log('Boa madrugada!')
} else if (hora > 5 && hora < 12){
    console.log('Bom dia!')
} else if(hora >= 12 && hora < 18){
    console.log('Boa tarde!')
} else if(hora >= 18 && hora <= 23){
    console.log('Boa noite!')
} else {
    console.log(`Você digitou ${hora} por favor digite uma hora valida!`)
}

let tenhoGrana = true

if (tenhoGrana) {
    console.log('Vou sair de casa!')
} else {
    console.log('Vou ficar em casa!')
}