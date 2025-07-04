const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      river: { format: "ogg", volume: 40 },
      wind: { format: "mp3", volume: 70 },
    },
  },
];

// Variables para calcular la media
let totalVolume = 0;
let soundCount = 0;

// Recorrer el array de usuarios con For of
for (const user of users) {
  // Recorrer los sonidos usando For in
  for (const soundName in user.favoritesSounds) {
    // Sumar el volumen
    totalVolume += user.favoritesSounds[soundName].volume;
    // Incrementar el contador de sonidos
    soundCount++;
  }
}

// Calcular la media
const averageVolume = totalVolume / soundCount;

// Imprimir el resultado
console.log(`Media de volumen: ${averageVolume}`);
console.log(`Total de sonidos: ${soundCount}`);
console.log(`Volumen total: ${totalVolume}`);

// Resultado: Media de volumen: 55