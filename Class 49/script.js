function recursiva(max) {
    if (max >= 10) return; // limite para a função parar
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);