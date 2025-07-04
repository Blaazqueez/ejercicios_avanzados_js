const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

// Array para las categorias 
const categorias = [];

// Recorrer el array de peliculas con For of
for (const movie of movies) {
  // Recorrer las categorías de las peliculas
  for (const category of movie.categories) {
    // Verificar si la categoría ya existe en el array usando includes()
    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  }
}

// Imprimir el array por consola
console.log(categorias);
