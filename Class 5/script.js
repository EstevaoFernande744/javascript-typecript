const nome = 'Estevão';
const sobrenome = 'Fernandes';
const idade = 26;
const peso = 107;
const alturaEmM = 1.66;
let IMC
let anoNascimento

IMC = peso / (alturaEmM * alturaEmM)
anoNascimento = 2024 - idade;

/*
if(IMC <= 18.5 && IMC < 24.9){
    console.log('Você esta com o IMC Baixo!')
    break
}if(IMC <= 24.9 && IMC < 29.9){
    console.log('Você esta no peso ideal!')
    break
}if(IMC <= 29.9 && IMC < 34.9){
    console.log('Você esta com Pré-Obesidade! ou sobrepeso')
    break
}if(IMC <= 34.9 && IMC < 39.9){
    console.log('Você esta com Obesidade grau I')
    break
}if(IMC <= 39.9 && IMC < 40){
    console.log('Você esta com Obesidade grau II')
    break
} else (IMC >= 40.0){
    console.log('Você esta com Obesidade grau III')
} 
*/

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmM} de altura e seu IMC é de ${IMC} o IMC ideal é entre 18,5 e 24,9.`)
console.log(`${nome} nasceu no ano de ${anoNascimento}.`)
