//elimino el registro de consola
console.clear();

//funcion crea un vector de dimension ingresada por el usuario y le carga valores aleatorios del 20 al 40
function setVectorN(): number[] {
  let longitud = Number(prompt("Ingrese dimension del arreglo"));
  let vector: number[] = new Array(longitud);
  for (let index = 0; index < vector.length; index++) {
    //aca lo que hago es generar numeros del 1 al 21 y le sumo 20, lo que hago es llevar el numero entr 40 y 20
    vector[index] = Math.floor(Math.random() * 21) + 20;
  }
  return vector;
}

//Funcion para mostrar los valores de un arreglo
function mostrarVector(v: number[]) {
  for (let indice: number = 0; indice < v.length; indice++) {
    console.log(v[indice]);
  }
}

//funcion que recorre el arreglo y retorna el valor minimo
function showMinValue(v: number[]): number {
  let minimo: number = v[0]; //recordar que si le doy el valor de la posicion ya lo puedo comparar
  for (let indice: number = 0; indice < v.length; indice++) {
    if (v[indice] < minimo) {
      minimo = v[indice];
    }
  }
  return minimo; // return, cuando lo lee sale de la funcion cortando todo.
}

let vResult: number[] = setVectorN();
mostrarVector(vResult);
console.log("El menor es: " + showMinValue(vResult));
