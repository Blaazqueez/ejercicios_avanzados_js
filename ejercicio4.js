function findArrayIndex(array, text) {
    // Recorrer el array con un bucle for tradicional para obtener el indice
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i; // Devolver la posicion en la cual se ha encontrado el texto
        }
    }
    return -1; // Si no se encuentra el texto se devuelve -1
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Comprobaciones con console logs
console.log(findArrayIndex(mainCharacters, "Luke")); // 0
console.log(findArrayIndex(mainCharacters, "Leia")); // 1
console.log(findArrayIndex(mainCharacters, "Han Solo")); // 2
console.log(findArrayIndex(mainCharacters, "Chewbacca")); // 3
console.log(findArrayIndex(mainCharacters, "Rey")); // 4
console.log(findArrayIndex(mainCharacters, "Anakin")); // 5
console.log(findArrayIndex(mainCharacters, "Obi-Wan")); // 6
console.log(findArrayIndex(mainCharacters, "Darth Vader")); // -1
console.log(findArrayIndex(mainCharacters, "luke")); // -1

function removeItem(array, text) {
    // Usamos la función anterior para recupera el indice
    const index = findArrayIndex(array, text);
    
    // Comprobamos si se ha encontrado el texot si no sera -1)
    if (index !== -1) {
        // Utilizamos splice para eliminar el elemento en la posicion del indice
        array.splice(index, 1);
    }
    
    // Recuperamos el array
    return array;
}