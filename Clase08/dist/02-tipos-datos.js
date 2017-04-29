// Booleanos
var finJuego = false;
// finJuego = "sí"
// Numéricos
var decimal = 20.34555;
var color = 0xff000;
var edad = 42;
// Textos
var usuario = "Juan Pérez";
usuario = "Rafael Carlos";
// Arreglos
var alumnos = ["Juan", "Luis", "Alfredo"];
var cursos = ["Javascript", "Node", "Angular"];
// Tuplas
var datos;
datos = ["Sergio", 42];
//datos = ["Juan", "Pérez"]
var arregloTupas;
// Enumeraciones
var colores;
(function (colores) {
    colores[colores["Rojo"] = 0] = "Rojo";
    colores[colores["Amarillo"] = 1] = "Amarillo";
    colores[colores["Azul"] = 2] = "Azul";
})(colores || (colores = {}));
console.log(colores.Rojo);
var listaErrores;
(function (listaErrores) {
    listaErrores[listaErrores["FallaInsercion"] = 1000] = "FallaInsercion";
    listaErrores[listaErrores["FallaActualizacion"] = 2000] = "FallaActualizacion";
    listaErrores[listaErrores["FallaRed"] = 3000] = "FallaRed";
})(listaErrores || (listaErrores = {}));
// Cualquier cosa
var telefono;
telefono = 999123123;
telefono = "4602345 anexo 3120";
// Void
function advertencia() {
    alert("Advertencia");
}
var constanciaDeNada = null; //undefined
// Never
function manejadorErrores() {
    throw new Error();
}
var saludo = "Buenos días";
//let cantidad:number = (<string>saludo).length
var cantidad = saludo.length;
//# sourceMappingURL=02-tipos-datos.js.map