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
var AnimalN = (function () {
    function AnimalN(raza) {
        this.raza = raza;
    }
    AnimalN.prototype.obtenerDatos = function () {
        return "La raza es " + this.raza;
    };
    return AnimalN;
}());
var MamiferoN = (function (_super) {
    __extends(MamiferoN, _super);
    function MamiferoN(paisOrigen, raza) {
        var _this = _super.call(this, raza) || this;
        _this.paisOrigen = paisOrigen;
        return _this;
    }
    MamiferoN.prototype.obtenerDatos = function () {
        return "El origen es " + this.paisOrigen + " " + this.raza;
        //return `El origen es ${this.paisOrigen} ${super.obtenerDatos()}`
    };
    return MamiferoN;
}(AnimalN));
var objAN = new AnimalN("camélido");
// objAN.raza = "dromedario"
console.log(objAN.raza);
//# sourceMappingURL=05-clases-modificadores.js.map