try {
    // É executa quando não há erros!
    // console.log(a); erro
    console.log('Abri um arquivo');
    console.log('Fechei o arquivo');
    console.log('Manipulei o arquivo e gerou erro');

    /*
    try{
        console.log(b);
    } catch(e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou finally.') 
    }
    */

} catch (e){
    // É executada quando há erros!
    console.log('Tratando o erro');
} finally {
    // É executado sempre!
    console.log('FINALLY: Eu sempre sou executado');
}

