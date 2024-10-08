let expr = "Uvas"

switch(expr) { // ===
    case "Naranjas":
        console.log("Las naranjas cuestan $15 el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $23 el kilo")
        break;
    case "Plátanos":
        console.log("Los plátanos cuestan $30 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 el kilo")
        break;
        default:
            console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("¿Hay algo más que desees?");