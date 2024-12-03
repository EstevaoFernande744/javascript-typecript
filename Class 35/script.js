// Escreva uma função que recebe 2 números e retorne o maior deles;


function max(a, b){
return a > b ? a : b;
}
console.log(max(12, 10));


const max2 = (x, y) => {
    return x > y ? x : y;
};

console.log(max2(20, 199))


function comparacao(a, b){

    /*
    if(a > b){
       `O ${a} é maior do que o ${b}`
    } else {
       `O ${b} é maior do que o ${a}`
    }
    */
   
    // usando o operador ternario

    return a > b ? `O valor ${a} é maior do que o ${b}` : `O  valor ${b} é maior do que o ${a}`
}

console.log(comparacao(12, 10));


// solução com arrowfunction simples

const max3 = (x, y) => x > y ? x : y;

console.log(max3(50, 213))