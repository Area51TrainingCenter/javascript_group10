var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Saludo = (function () {
    function Saludo(usuario) {
        this.usuario = usuario;
    }
    Saludo.prototype.saludar = function () {
        return "Buenas tardes " + this.usuario;
    };
    return Saludo;
}());
var Animal = (function () {
    function Animal(raza) {
        this.raza = raza;
    }
    Animal.prototype.obtenerDatos = function () {
        return "La raza es " + this.raza;
    };
    return Animal;
}());
var Mamifero = (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero(paisOrigen, raza) {
        var _this = _super.call(this, raza) || this;
        _this.paisOrigen = paisOrigen;
        return _this;
    }
    Mamifero.prototype.obtenerDatos = function () {
        return "El origen es " + this.paisOrigen + " " + _super.prototype.obtenerDatos.call(this);
    };
    return Mamifero;
}(Animal));
var obj = new Saludo("Sergio");
console.log(obj.saludar());
var objA = new Animal("camélido");
console.log(objA.obtenerDatos());
var objB = new Mamifero("Perú", "camélido");
var datosAnimal = objB.obtenerDatos();
console.log(datosAnimal);
//# sourceMappingURL=04-clases.js.map