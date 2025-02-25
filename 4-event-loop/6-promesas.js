console.log("Inicio");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Datos recibidos:", data));

console.log("Fin");

//en aquest codi el que fem es fer una crida a una api
//  amb fetch i despres cridar a la funcio then per a
//  processar la resposta i mostrarla per consola
//  pero com que es una crida asincrona, el codi no
//  espera a que la crida acabi i segueix executant