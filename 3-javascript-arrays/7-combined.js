  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // Combine Methods
  
  const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
  
  console.log(combined);
  //aquest codi el que fa es multiplicar per 2 els 
  // elements de l'array ages, despres filtra els elements
  //  que son iguals o majors a 40, despres els ordena de 
  // menor a major i finalment fa la suma de tots els elements
  //  de l'array
  
  