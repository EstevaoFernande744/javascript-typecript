//                -5          -4       -3       -2         -1
//                 0           1        2        3          4
const nomes = ['Estevão', 'Jordanna', 'Lua', 'Thiago', 'Cristiana']; 

// nomes.splice(Índice, delete, elem1, elem2, elem3)

// pop
const removidos = nomes.splice(4, 1); // o mesmo que fazer nomes.splice(-1, 1);
console.log(`Pelo metodo Slice: `, nomes , removidos);

nomes.splice(0, 0, 'Luna', 'junior')
console.log(`Pelo metodo Unshift: `, nomes) // elemento, deletar, elemento pra adicionar;

nomes.splice(nomes.length, 0, 'Luna')
console.log(`Pelo metodo Push: `, nomes) 

