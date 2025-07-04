function rollDice(faces) {
    /*La función Math.random pertenece al método Math de java,
    y su fución es la de generar un numero aleatorio entre un rango determinado,
    ya que multiplicandolo por un numero u otro se puede hacer que el numero que devuelva
    sea distinto
    */
   return Math.floor(Math.random() * faces) + 1;
   // Utilizamos floor para redondear el numero
}

console.log(rollDice(6)); // Dado de 6 caras
console.log(rollDice(20)); // Dado de 20 caras
console.log(rollDice(12)); // Dado de 12 caras
console.log(rollDice(4)); // Dado de 4 caras