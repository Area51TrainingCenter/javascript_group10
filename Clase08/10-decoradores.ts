function cursoDecor(target) {
    Object.defineProperty(target.prototype, "curso", {value: ()=> "Angular2 y ES2015"})
}

@cursoDecor
class alumno {
    nombre:string
    apellido:string
    constructor(nombre:string, apellido:string){
        this.nombre = nombre
        this.apellido = apellido
    }
}

const objDecor = new alumno("Sergio", "Hidalgo")
console.log(objDecor.curso())