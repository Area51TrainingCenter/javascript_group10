var ftnSuma = function (a, b) {
    console.log(b);
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
};
var ftnResta = function (a, b) {
    if (b === void 0) { b = 20; }
    return a - b;
};
var ftnMultiplicacion = function (a, b, c) {
    if (b === void 0) { b = 20; }
    return a * b * c;
};
console.log(ftnSuma(10));
console.log(ftnResta(40, 30));
console.log(ftnResta(40));
console.log(ftnMultiplicacion(5, 6, 3));
console.log(ftnMultiplicacion(5, undefined, 3));
//# sourceMappingURL=07-funciones.js.map