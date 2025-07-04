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
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// Objeto para contar los atributos de cada sonido
const soundCount = {};

// Recorrer la lista usando For of
for (const user of users) {
  console.log(`Revisando sonidos favoritos de ${user.name}:`);
  
  // Recorrer los sonidos favoritos usando For in
  for (const soundName in user.favoritesSounds) {
    console.log(`  - ${soundName}`);
    
    // Si el sonido ya existe incrementamos el contador
    if (soundCount[soundName]) {
      soundCount[soundName]++;
    } else {
      // Si el sonido no esrepetido se inicializa en 1
      soundCount[soundName] = 1;
    }
  }
}
console.log("sonidos favoritos:");

for (const sound in soundCount) {
  console.log(`${sound}: ${soundCount[sound]} veces`);
}

console.log("\nSonido al completo:", soundCount);

