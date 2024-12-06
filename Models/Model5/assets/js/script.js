function relogio (){

    function getTimeFromSecunds(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false, // tirar o meio dia
            timeZone: 'UTC' // zerar a hora
        });
    }
    
    const relogio = document.querySelector('.relogio')
    
    /* não precisamos declarar as variaveis, pois já estão adicionadas no addEventListener:
    
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar') 
    const guardar = document.querySelector('.guardar')
    
    */
    
    const salvos = document.querySelector('.salvos')  
    let segundos = 0;
    let timer;
    let contador = 0;
    
    
    function startTimer(){
            timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSecunds(segundos);
        }, 1000);
    }
    
    // agrupar o click como função geral
    
    document.addEventListener('click', function(e){
        const el = e.target;
    
        // quando der click em iniciar
    
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer); // parar caso tenha um timer rodando
            startTimer();
        }
    
        // quando der click em pausar
    
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
    
        // quando der click em zerar
    
        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0; // resetar o contador
            relogio.classList.remove('pausado');
        }
    
        // quando der click em guardar
    
        if(el.classList.contains('guardar')) {
            const tempoSalvo = getTimeFromSecunds(segundos);
    
            if(tempoSalvo === '00:00:00') return; // impede de salvar o tempo quando zerado 
        
            contador++;
        
            // Cria um novo elemento de lista (li) para o tempo salvo
            const itemSalvo = document.createElement('li');
            itemSalvo.textContent = `${contador}° tempo salvo: ${tempoSalvo}`;
        
            // Adiciona o novo tempo salvo à lista
            salvos.appendChild(itemSalvo);
        }
    
    })
    
    // função pra double click
    
    document.addEventListener('dblclick', function(event){
        const ele = event.target;
    
        // quando der double click no pausar
    
        if(ele.classList.contains('pausar')){
            startTimer();
            relogio.classList.remove('pausado')
        }
    
        // quando der double click no zerar
    
        if(ele.classList.contains('zerar')){
            salvos.innerHTML = '';
            contador = 0;
        }
    
    })
    
    /*
    iniciar.addEventListener('click', function(){
        relogio.classList.remove('pausado')
        clearInterval(timer); // parar caso tenha um timer rodando
        startTimer();
    });
    
    pausar.addEventListener('click', function(){
        clearInterval(timer);
        relogio.classList.add('pausado')
    });
    
    pausar.addEventListener('dblclick', function(){
        startTimer();
        relogio.classList.remove('pausado')
    });
    
    zerar.addEventListener('click', function(){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0; // resetar o contador
        relogio.classList.remove('pausado'); // Remove a classe 'pausado' ao resetar
    });
    
    zerar.addEventListener('dblclick', function(){
        salvos.innerHTML = ''; // Limpa todos os tempos salvos da lista
    })
    
    guardar.addEventListener('click', function(){
        const tempoSalvo = getTimeFromSecunds(segundos);
    
        if(tempoSalvo === '00:00:00') return; // impede de salvar o tempo quando zerado 
    
        contador++;
    
        // Cria um novo elemento de lista (li) para o tempo salvo
        const itemSalvo = document.createElement('li');
        itemSalvo.textContent = `${contador}° tempo salvo: ${tempoSalvo}`;
    
        // Adiciona o novo tempo salvo à lista
        salvos.appendChild(itemSalvo);
    })
    
    */    
}

relogio()