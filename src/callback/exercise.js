export function exeCallback(callback) {
    setTimeout(callback, 2000, 'Doris');
}

function saludo(nombre) {
    console.log(`Si se puede, ${nombre}`);
}

exeCallback(saludo)