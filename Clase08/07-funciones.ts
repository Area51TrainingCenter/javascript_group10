let ftnSuma = function(a:number, b?:number):number {
    console.log(b)
    if(b) {
        return a + b
    } else {
        return a
    }
}

let ftnResta = function(a:number, b:number = 20):number {
    return a - b
}

let ftnMultiplicacion = function(a:number, b:number=20, c:number):number {
    return a * b * c
}

console.log(ftnSuma(10))
console.log(ftnResta(40, 30))
console.log(ftnResta(40))
console.log(ftnMultiplicacion(5,6,3))
console.log(ftnMultiplicacion(5,undefined,3))