const elementos = [ // array com objetos
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];

let container = document.querySelector('.container'); // selecionamos o container
let div = document.createElement('div'); // crimos a div

for(let i = 0; i < elementos.length; i++){
    // console.log(elementos[i].tag)
    let {tag, texto} = elementos[i]; // Atribuição via desestruturação
    // console.log(tag)    
    let tags = document.createElement(tag); // tag criada 
    // tags.innerText = texto; // a cada interação do laço, criamos uma tag nova ------- começamos usando inneRHTML
    let textoNode = document.createTextNode(texto);
    tags.appendChild(textoNode) // adicionamos as tags dentro da div  
    div.appendChild(tags)                                                                   
}

container.appendChild(div) // 