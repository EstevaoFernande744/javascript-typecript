const paragrafos = document.querySelector('.paragrafos'); // só retorna um elemento

const ps = paragrafos.querySelectorAll('p'); 

const estilosBody = getComputedStyle(document.body)
const backGroundColorBody = estilosBody.backgroundColor;

console.log(backGroundColorBody)

// nodelist, não array

for(let p of ps){
    console.log(p)
    p.style.backgroundColor = backGroundColorBody // bg do body
    p.style.color = '#FFFFFF' // pintar as letras de branco
};
