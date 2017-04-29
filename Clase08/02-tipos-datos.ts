// Booleanos
let finJuego:boolean = false
// finJuego = "sí"

// Numéricos
let decimal:number = 20.34555
let color:number = 0xff000
let edad:number = 42

// Textos
let usuario:string = "Juan Pérez"
usuario = "Rafael Carlos"

// Arreglos
let alumnos:string[] = ["Juan", "Luis", "Alfredo"]
let cursos:Array<string> = ["Javascript", "Node", "Angular"]

// Tuplas
let datos:[string, number]
datos = ["Sergio", 42]
//datos = ["Juan", "Pérez"]
let arregloTupas:Array<[string, number]>

// Enumeraciones
enum colores {Rojo, Amarillo, Azul}
console.log(colores.Rojo)

enum listaErrores{
    FallaInsercion = 1000,
    FallaActualizacion = 2000,
    FallaRed = 3000
}

// Cualquier cosa
let telefono:any
telefono = 999123123
telefono = "4602345 anexo 3120"

// Void
function advertencia():void {
    alert("Advertencia")
}

let constanciaDeNada:void = null //undefined

// Never
function manejadorErrores():never {
    throw new Error()
}

let saludo:any = "Buenos días"
//let cantidad:number = (<string>saludo).length
let cantidad:number = (saludo as string).length




