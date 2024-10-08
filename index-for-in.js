/*

for in ---> objetos

propiedades = valor

array, string

item

for (variable in objeto) {
código
}
*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
};

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

