// Operador ternario

// (condição) ? valor p/ verdadeiro : valor p/ falso

const pontuaçaoUsuario = 999;
const nivelUsuario = (pontuaçaoUsuario >= 1000) ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao)

/*
if (pontuaçaoUsuario >= 1000){
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}
*/


