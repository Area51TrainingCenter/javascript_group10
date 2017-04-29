function imprimirEtiqueta(obj) {
    console.log(obj.etiqueta);
    console.log(obj.titulo);
    console.log(obj.numero);
}
imprimirEtiqueta({ etiqueta: "Tamaño Sobre", titulo: "Invitación", numero: 50 });
function calcularTotal(obj) {
    var propina = 0.05;
    if (obj.propina) {
        propina = obj.propina;
    }
    return obj.costo + obj.costo * obj.igv + obj.costo * propina;
}
console.log("Sin propina", calcularTotal({ costo: 100, igv: 0.18 }));
console.log("Con propina", calcularTotal({ costo: 100, igv: 0.18, propina: 0.1 }));
var usuarioArea51 = { nombre: "Marco", apellido: "Polo" };
//usuarioArea51.nombre = "Cristóbal"
var cursosArea51 = ["Javascript", "NodeJS", "Angular"];
var mi_funcion = function (nom, ape) {
    return "Nombre completo = " + nom + " " + ape;
};
var Reloj = (function () {
    function Reloj(zonaHoraria) {
    }
    Reloj.prototype.configurarHora = function (fecha) {
        return fecha.getDate().toString();
    };
    return Reloj;
}());
var objAnimal = {};
objAnimal.raza = "camélido";
objAnimal.paisOrigen = "Perú";
//# sourceMappingURL=03-interfaces.js.map