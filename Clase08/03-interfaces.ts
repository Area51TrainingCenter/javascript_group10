interface interDatos {
    etiqueta:string
    titulo:string
    numero:number
}

function imprimirEtiqueta(obj:interDatos){
    console.log(obj.etiqueta)
    console.log(obj.titulo)
    console.log(obj.numero)
}

imprimirEtiqueta({etiqueta: "Tamaño Sobre", titulo: "Invitación", numero: 50})

interface factura {
    costo:number
    igv: number
    propina?: number
}

function calcularTotal(obj:factura):number {
    let propina:number = 0.05
    if(obj.propina) {
        propina = obj.propina
    }
    return obj.costo + obj.costo * obj.igv + obj.costo * propina
}

console.log("Sin propina", calcularTotal({costo:100, igv:0.18}))
console.log("Con propina", calcularTotal({costo:100, igv:0.18, propina:0.1}))

interface datosUsuario {
    readonly nombre:string
    readonly apellido:string
}

let usuarioArea51:datosUsuario = {nombre: "Marco", apellido: "Polo"}
//usuarioArea51.nombre = "Cristóbal"

let cursosArea51:ReadonlyArray<string> = ["Javascript", "NodeJS", "Angular"]
//cursosArea51.push("HTML5")

interface miFuncion{
    (nombre:string, apellido:string):string
}

const mi_funcion:miFuncion = function(nom:string, ape:string):string {
    return `Nombre completo = ${nom} ${ape}`
}

interface intReloj {
    zonaHoraria:string
    configurarHora(d:Date):string
}

class Reloj implements intReloj{
    zonaHoraria
    constructor(zonaHoraria){}

    configurarHora(fecha:Date):string{
        return fecha.getDate().toString()
    }
}

interface intAnimal {
    raza:string
}

interface intMamifero extends intAnimal {
    paisOrigen:string
}

let objAnimal:intMamifero = <intMamifero>{}
objAnimal.raza = "camélido"
objAnimal.paisOrigen = "Perú"
