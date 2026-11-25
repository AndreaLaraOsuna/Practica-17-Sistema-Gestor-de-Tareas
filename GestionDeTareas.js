// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  //for que recorre cada tarea de la lista.
  for (tarea of lista){

    //imprimimos el nombre de la tarea actual
    console.log(`- ${tarea.nombre}`);
    //imprimimos si esta completada o pendiente
    console.log(`- Estado: ${tarea.completada ? "Completada" : "Pendiente"}`);
  }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  //devolvemos la lista filtrada por tarea, solo las tareas que tengan completada como true
  return lista.filter((tarea)=> tarea.completada === true);
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  //devolvemos la lista filtrada por tarea, solo las tareas que tengan completada como false
  return lista.filter((tarea)=> tarea.completada === false);
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  //devolvemos la lista pero solo con el nombre de cada tarea
  return lista.map((tarea)=> tarea.nombre);
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  //usamos el atributo de la lista que nos dice cuantos elementos tiene
  return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    //utilizo la funcion para mostrar que ya tenia y le doy como parametro el arreglo de tareas
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    //guardo las tareas completadas que obtengo con el metodo que ya tenia
    tareasCompletadas = obtenerCompletadas(this.tareas);
    //y con el metodo de mostrar tareas muestra el arreglo que ya esta filtrado
    mostrarTareas(tareasCompletadas);

  },

  mostrarPendientes: function() {
    //guardo las tareas pendientes que obtengo con el metodo que ya tenia
    tareasPendientes = obtenerPendientes(this.tareas);
    //y con el metodo de mostrar tareas muestra el arreglo que ya esta filtrado
    mostrarTareas(tareasPendientes);
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
//si la cantidad de elementos de la lista es igual a 0 pues significa que no hay tareas
if (tareas.length === 0) {
  console.log('No hay tareas');
      //si TODAS las tareas que hay tienen true en completada es porque todas estan completadas
}else if(tareas.every((tarea)=> tarea.completada === true)){
  console.log('Todas las tareas completadas');
}

// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

switch (opcion) {
  case 1:
    sistema.mostrarTareas();
    break;

  case 2:
    sistema.mostrarCompletadas();
    break;

  case 3:
    sistema.mostrarPendientes();
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log("********** 2. Funciones **********");

console.log("mostrarTareas");
mostrarTareas(tareas);

console.log("obtenerCompletadas");
console.log(obtenerCompletadas(tareas));

console.log("obtenerPendientes");
console.log(obtenerPendientes(tareas));

console.log("obtenerNombres");
console.log(obtenerNombres(tareas));

console.log("contarTareas");
console.log(contarTareas(tareas));

console.log("********** 3. Objeto sistema **********");

console.log("sistema.mostrarTareas");
sistema.mostrarTareas();

console.log("sistema.mostrarCompletadas");
sistema.mostrarCompletadas();

console.log("sistema.mostrarPendientes");
sistema.mostrarPendientes();

