var CursosArea51 = (function () {
    function CursosArea51(nuevos, salientes) {
        this.total = nuevos - salientes;
    }
    CursosArea51.prototype.obtenerTotalCursos = function () {
        return CursosArea51.totalCursos;
    };
    return CursosArea51;
}());
CursosArea51.totalCursos = 100;
console.log(CursosArea51.totalCursos);
//# sourceMappingURL=06-estatico.js.map