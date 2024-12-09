const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1 + a2;
const a3 = a1.concat(a2, [7, 8, 9], 'Estevão');
// ... (rest) -> ... spread
const a4 = [...a1, ... a2]; // concatenando dois valores com spread 
console.log(typeof a3, a3);
