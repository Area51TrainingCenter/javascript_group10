function Component(config){
    return function(target) {
        Object.defineProperty(target.prototype, "selector", {value: ()=> config.selector})
        Object.defineProperty(target.prototype, "template", {value: ()=> config.template})
    }
}


@Component({
    selector: "app-detalle",
    template: `<h1>Título</h1>`
})
class appAlumno {
    nombre:string
    apellido:string
    constructor(nombre:string, apellido:string){
        this.nombre = nombre
        this.apellido = apellido
    }
}

const objDecor = new appAlumno("Sergio", "Hidalgo")
console.log(objDecor.curso())