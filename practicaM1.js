// let y const

// let a = 5;
// a=19
// let b = 10;

// let suma = a + b;
// console.log(suma)

// const a=5
// const b =8
// const suma= a+b
// console.log(suma)

//Scope global
// let global = "Soy global";

// function ejemplo (){
//     console.log(global);
// }
// console.log(global +" 2")
// console.log (ejemplo);

// if (true) {
//   let a = 13;
//   console.log(a);
// }

//objetos literales

// const miObjeto ={
//     nombre: "jorge",
//     apellido: "Palacio",
//     edad: 38

// }
// console.log(miObjeto)
// const nombre= "jorge"
// const apellido = "Palacio"

// const persona ={
//     nombre,
//     apellido
// }
// console.log (persona)

// const griffindor = {
//   casa: "Griffindor",
//   ubicacion: "torre del castillo",

//   asignarPropDinamica(clave, valor) {
//     this[clave] = valor;
//   },
// };

// griffindor.asignarPropDinamica("fundador", "Godric Gryffindor");

// console.log(griffindor);

//templates literal

// function templates(nombre, idSecret){
//     console.log(`este es: ${nombre} mejor conocido como: ${idSecret}`)

// }
// templates("Jorge", "Papá")

//¿Qué es el Scape Sequence?
// const mensaje =
//   "Este es un mensaje con una comilla simple: ' y un salto de línea.\n¡Hola Mundo!";

// Imprimimos el mensaje en la consola
// console.log(mensaje);

// const mensaje2 =
//   "Este es un mensaje con una comilla simple: ' y un salto de línea.\n¡Hola Mundo!";

// // Imprimimos el mensaje en la consola
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

// Definición de la clase Repository
class Repository {
  constructor() {
    this.activities = []; // Inicialización del arreglo de actividades
    this.id = 0;
  }

  // Método para obtener todas las actividades
  getAllActivities() {
    return this.activities;
  }

  // Método para crear una nueva actividad
  createActivity(id, title, description, imgUrl) {
    const id = ++this.id;
    //! creamos una instancia
    const activity = new Activity(id, title, descripcion, imgUrl);
    this.activities.push(activity);
  }
}

const repository = new Repository();
