/*
Estructura de datos 

key / value

objeto {
    propiedad: valor, 
    propiedad: valor, 
    propiedad: valor, 
    Métodos
}

*/

const persona = {
    nombre: "Lola",
    edad: 30,
    direccion: {
        calle: "AV Insurgentre 187",
        ciudad: "CDMX", 
    },
    saludar() {
        console.log(`hola mi nombre es ${persona.nombre}`)
    }
}