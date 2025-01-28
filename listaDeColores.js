// Crearemos una lista de colores con unshift, shift, splice, push y pop

const listaColores = [
    "Amarillo",
    "Azul",
    "Rojo",
    "Verde",
    "Naranja",
    "Morado",
    "Rosa",
    "Marrón",
    "Negro",
    "Blanco"
]

listaColores.unshift("AzulOscuro", "VerdeOscuro"); // Pondremos al principio dos colores
listaColores.shift(); // Quitaremos el primer elemento de la lista
listaColores.splice(1, 3)[0]; // Quitaremos los 3 primeros elementos de la lista (excepto VerdeOscuro)
listaColores.push("RojoOscuro", "AmarilloOscuro") // Meteremos estos dos colores al final de la lista
listaColores.pop(); // Quitaremos el último elemento

console.log(listaColores)