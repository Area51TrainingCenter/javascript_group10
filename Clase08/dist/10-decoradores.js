var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function cursoDecor(target) {
    Object.defineProperty(target.prototype, "curso", { value: function () { return "Angular2 y ES2015"; } });
}
var alumno = (function () {
    function alumno(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    return alumno;
}());
alumno = __decorate([
    cursoDecor
], alumno);
var objDecor = new alumno("Sergio", "Hidalgo");
console.log(objDecor.curso());
//# sourceMappingURL=10-decoradores.js.map