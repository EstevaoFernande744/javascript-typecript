// Valor por referência
//                 0           1        2
const nomes = ['Estevão', 'Jordanna', 'Lua'];
// String, Objetos, Funções, Números
const novo = nomes; // A const novo se iguala ao vetor 

const names = new Array('Estevão', 'Jordanna', 'Lua'); // forma menos eficiente
const news = [...names]; // O vetor news pegou os valor do vetor names por espalhamento (spreed)

const removido = nomes.pop(); // remove um item  
const removed = news.pop();
const movido = names.shift() // removeu o primeiro nome e muda os itens 
nomes.push('Thiago'); // adicionar um elemento novo
nomes.unshift('Cristiana'); // adicionar um elemento novo no item 0

// nomes[3] = 'Luna';
// delete nomes[3];
console.log(nomes, nomes.length);
console.log(novo, novo.length);
console.log(names, names.length);
console.log(news, news.length);
console.log(removido, removed);
console.log(movido);

const players = ['Estevão', 'Jordanna', 'Lua', 'Thiago', 'Cristiana']; 
console.log(players.slice(1, 3)); /* elemento de inicio */ /* ate onde mas n pega o ultimo item */
console.log(players.slice(1, -2));

// Para transformar uma String em um Array 

const nome = 'Estevão Fernandes Junior';
const arrayNome = nome.split(' ');
console.log(arrayNome);
console.log(arrayNome.join(' '));
