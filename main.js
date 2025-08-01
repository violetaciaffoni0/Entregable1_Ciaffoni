//Lista de peliculas
const peliculas = ["la Monja 2", "Oppenheimer", "Intensamente 2", "Deadpool 3"];
//precio base de entrada general
const precioGeneral = 3000;
// tipos de entradas y sus descuentos
const tipoEntradas = [
  { tipo: "general", descuento: 0 },
  { tipo: "Estudiante", descuento: 0.3 },
  { tipo: "jubilado", descuento: 0.5 },
];
//Funcion para mostrar la cartelera y elegir peliculas
function mostrarCartelera() {
  let mensaje = "Cartelera disponible:\n ";
  for (let i = 0; i < peliculas.length; i++) {
    mensaje += `${i + 1}. ${peliculas[i]}\n`;
  }
  let eleccion = prompt(
    mensaje + "Elige el número de la película que querés ver:"
  );

  let indice = parseInt(eleccion) - 1;
  if (indice >= 0 && indice < peliculas.length) {
    console.log("Elegiste ver: " + peliculas[indice]);
    return peliculas[indice];
  } else {
    alert("Opción inválida. Se seleccionará la primera película por defecto.");
    return peliculas[0];
  }
}

// Función para elegir tipo de entrada y cantidad
function elegirEntrada() {
  let mensaje = "Tipos de entrada:\n";
  for (let i = 0; i < tipoEntradas.length; i++) {
    mensaje += `${i + 1}. ${tipoEntradas[i].tipo}\n`;
  }
  let tipoElegido = prompt(mensaje + "Elige el número del tipo de entrada:");
  let indiceTipo = parseInt(tipoElegido) - 1;
  if (indiceTipo < 0 || indiceTipo >= tipoEntradas.length) {
    alert("Opción inválida. Se seleccionará entrada general por defecto.");
    indiceTipo = 0;
  }
  let cantidad = prompt("¿Cuántas entradas querés?");
  let cantidadEntradas = parseInt(cantidad);

  if (isNaN(cantidadEntradas) || cantidadEntradas <= 0) {
    alert("Cantidad inválida. Se tomará 1 entrada.");
    cantidadEntradas = 1;
  }
  let descuento = tipoEntradas[indiceTipo].descuento;
  let precioFinal = precioGeneral * cantidadEntradas * (1 - descuento);

  console.log(`Tipo de entrada: ${tipoEntradas[indiceTipo].tipo}`);
  console.log(`Cantidad: ${cantidadEntradas}`);
  console.log(`Total a pagar: $${precioFinal}`);

  alert(
    `Resumen:\nPelícula: ${peliculaElegida}\nTipo: ${tipoEntradas[indiceTipo].tipo}\nCantidad: ${cantidadEntradas}\nTotal: $${precioFinal}`
  );
}
// LLAMADAS A LAS FUNCIONES
let peliculaElegida = mostrarCartelera();
elegirEntrada();
