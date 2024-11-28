//alert(1)
window.onload = function(){
let nome = document.querySelector('#inome')
let email = document.querySelector('#iemail')
let senha = document.querySelector('#ipassword')
let confirms = document.querySelector('#icpassword')

let pessoa = [nome, email, senha, confirms]

let erro = document.querySelector('#ierro')


let form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

if (senha.value !== confirms.value){
    erro.textContent = 'As senhas não coincidem!'
}else{
    erro.textContent =''
}
})
}

