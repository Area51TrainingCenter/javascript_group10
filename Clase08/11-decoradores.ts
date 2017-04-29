function Estudiante(config){
    return function(target) {
        Object.defineProperty(target.prototype, "curso", {value: ()=> config.nombreCurso})
    }
}


@Estudiante({
    nombreCurso: "ES2015, TypeScript, Angular"
})
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