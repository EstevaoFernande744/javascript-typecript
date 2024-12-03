function retorarHora(data){
    if(data && !(data instanceof Date)) {/* se essa data for enviada e não for uma instancia de Date lança o erro; */
        // console.log('Não é');
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data){ // se a data não for enviada 
        data = new Date(); 
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit', // PARA SER APENAS A HORA 
        minute: '2-digit',
        secund: '2-digit',
        hour12: false // PARA NÃO SER 12 HORAS, SER 24H
    });
}

try {
    const data = new Date('01-01-1970 12:58:12') // data ficticia 
    const hora = retorarHora(); 
    // retorarHora(11)
    console.log(hora);
} catch(error){
    // Tratar erro 
    // console.log(error); // ver o erro
} finally {
    console.log('Tenha um bom dia.');
}
