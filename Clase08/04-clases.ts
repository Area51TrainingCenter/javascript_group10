class Saludo {
    usuario:string
    constructor(usuario:string){
        this.usuario = usuario
    }

    saludar():string{
        return `Buenas tardes ${this.usuario}`
    }
}

class Animal {
    raza:string
    constructor(raza:string){
        this.raza = raza
    }
    obtenerDatos():string {
        return `La raza es ${this.raza}`
    }
}

class Mamifero extends Animal {
    paisOrigen:string
    constructor(paisOrigen:string, raza:string){
        super(raza)
        this.paisOrigen = paisOrigen  
    }

    obtenerDatos():string {
        return `El origen es ${this.paisOrigen} ${super.obtenerDatos()}`
    }
}

let obj:Saludo = new Saludo("Sergio")
console.log(obj.saludar())

let objA:Animal = new Animal("camélido")
console.log(objA.obtenerDatos())

let objB:Mamifero = new Mamifero("Perú", "camélido")
let datosAnimal:string = objB.obtenerDatos()
console.log(datosAnimal)