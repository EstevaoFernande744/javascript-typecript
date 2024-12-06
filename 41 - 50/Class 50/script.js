function* geradora1() {
    // Código
    yield 'Valor 1'; // Similar a return
    // Código
    yield 'Valor 2';
    // Código
    yield 'Valor 3';
}

const g1 = geradora1();
for (let valor of g1){
    console.log(valor);
}

/*console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next()); */

// acabou os valores

function* geradora2() {
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());



function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor)
}

function* geradora5() {
    yield function(){
        console.log('Vim do y1');
    }


    // return function() { console.log('Vim do return') } se colocar esse return o codio de baixo n é lido;

    //...

    yield function() {
        console.log('Vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
// func3();