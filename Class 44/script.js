// Global
function retornaFuncao(){
// Função Pai
    const nome = 'Estevão';
    return function(){
// Função Filha
        return nome
    }
}

const funcao = retornaFuncao();
console.log(funcao);