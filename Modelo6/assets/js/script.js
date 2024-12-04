const caixaTexto = document.querySelector('.input-nova-tarefa');
const botaoEnvio = document.querySelector('.btn-add-tarefa');
let itensEnviados =  document.querySelector('.tarefas');


// função para criar um li

function criaLi(){
    const li = document.createElement('li') // cria 
    return li // retorna esse elemento li
}

caixaTexto.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
    if(!caixaTexto.value) return;
    salvaTarefa(caixaTexto.value)
    }
});

function limparInput(){
    caixaTexto.value = ''; // limpa o valor da caixa de texto
    caixaTexto.focus(); // focus é para quando clicar na caixa ela pisca
}

function criaBotaoApagar(li){
    li.innerText += ' '; // adicionando um espaço entre o texto e o botão
    const botaoApagar = document.createElement('button'); // criando o bot]ao
    botaoApagar.innerText = 'Apagar'; // nome do botão
    // botaoApagar.classList = 'btn-apagar'
    li.appendChild(botaoApagar) // onde colocar esse botão
    botaoApagar.setAttribute('class', 'btn-apagar')
    botaoApagar.setAttribute('title', 'Apagar essa tarefa')
}

// função para linkar o botão ao texto e evitar envio ''
function salvaTarefa(textoInput){
    // console.log(textoInput); foi testado
    const li = criaLi(); // cria uma variavel li que chama a função criaLi
    li.innerText = textoInput; // faz a função escrever 
    itensEnviados.appendChild(li); // cria os filhos do elemento itensEnviados
    limparInput();
    criaBotaoApagar(li) // chamando a função de adicionar o botão
    guardarTarefa();
}


// quando clicarmos no botão ele leva a valor da caixa para salvaTarefa
botaoEnvio.addEventListener('click', function(){
    if(!caixaTexto.value) return; // texta se a caixaTexto esta vazia
    // console.log(caixaTexto.value) foi testado
    salvaTarefa(caixaTexto.value); // chama a função nomeando o parametro com o valor de caixaTexto
})


document.addEventListener('click', function(e){
    const el = e.target;
    
    if (el.classList.contains('btn-apagar')){
        // console.log('Apagar');
        el.parentElement.remove();  
        guardarTarefa();
    }

})


function guardarTarefa() {
    const liTarefas = itensEnviados.querySelectorAll('li');
    // console.log(liTarefas)
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
       // console.log(tarefa.innerText);
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // trocar apagar por nada e tirar o espaço depois do texto
        // console.log(tarefaTexto)
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); /* JSON.stringfy seria p/ salvarvariavel em um espaço do navegador */
    // console.log(tarefasJSON)
    localStorage.setItem('tarefas', tarefasJSON) // so salva string
}

function retornaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // convertendo de volta para array
    // console.log(tarefas);
    for(let tarefa of listaDeTarefas){
        salvaTarefa(tarefa);
    }
}

retornaTarefasSalvas()