/*
Estructura de datos 

key / value

objeto {
    propiedad: valor, 
    propiedad: valor, 
    propiedad: valor, 

    Métodos()
}

*/

const persona = {
    nombre: "Lola",
    edad: 30,
    direccion: {
        calle: "AV Insurgente 187",
        ciudad: "CDMX"
    },
    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`)
    },
};

console.log(persona);
persona.saludar();

persona.telefono = "555-555-5555"

console.log(persona.telefono);

persona.despedir = () => {
    console.log("Adios");
};

persona.despedir();

delete persona.telefono;

delete persona.despedir;