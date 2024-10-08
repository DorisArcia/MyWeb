/*
Requerimientos del reto

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña 
ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar 
un mensaje de bienvenida y mostrar el timeline del usuario
4. Si el usuario y contraseña son incorrectos, el sistema
debe mostrar un mensaje de error y no mostrar ningún timeline

*/

const userDatabase = [
    {
        username: "Lola",
        password: "123",
    },
    {
        username: "Mario",
        password: "456",
    },
    {
        username: "Luisa",
        password: "789",
    },
]

const usersTimeline = [
    {
        username: "Lola",
        timeline: "Me encanta Javascript!",
    },
    {
        username: "Mario",
        timeline: "Developer es lo mejor!",
    },
    {
        username: "Ana",
        timeline: "A mi me gusta el café y el té",
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar",
    },
];

const username = prompt("Escriba su usuario");
const password = prompt("Ingrese su contraseña");

function usuarioExistente(username, password) {
    for(let i = 0; i < userDatabase.length; i++) {
        if(
            userDatabase[i].username === username &&
            userDatabase[i].password === password
        ) {
            return true;
            break;
        }
    }
    return false;

}
    
function signIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido a su cuenta ${username}`);
        console.log(usersTimeline);
    }else {
        alert("Ussps lo siento, usuario o contraseña no encontrado!");
    }
}


signIn(username, password);