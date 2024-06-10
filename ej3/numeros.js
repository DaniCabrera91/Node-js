
// Declarar una función con el nombre esPar, esta función acepta un número como parámetro. 
// exports.esPar = numero => {
//   return numero % 2 === 0;
// }

function esPar(numero) {
    return numero % 2 === 0;
  }
  
  // **Correct Export:**
  module.exports = esPar;

// Importar el módulo logplease. Importar el módulo numeros Llamar a la función esPar con los siguientes valores:
// 2, 3, 101, 201, 202, 100
// Si el número es par mostrar en consola el siguiente mensaje utilizando los métodos indicados del módulo logplease:
// El número es par (utilizar el método info)
// El número no es par (utilizar el método error)
