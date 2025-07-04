function swap(array, index1, index2) {
    // Intercambiar los elementos usando una variable temporal
    let temporal = array[index1];
    array[index1] = array[index2];
    array[index2] = temporal;
    
    return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

// Ejemplos
console.log(swap([...fantasticFour], 0, 3)); // Intercambiar primero y último
console.log(swap([...fantasticFour], 1, 2)); // Intercambiar centrales