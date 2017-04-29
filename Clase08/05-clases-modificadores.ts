class AnimalN {
    // private raza:string
    // protected raza:string
    // public raza:string
    readonly raza:string
    constructor(raza:string){
        this.raza = raza
    }
    obtenerDatos():string {
        return `La raza es ${this.raza}`
    }
}

class MamiferoN extends AnimalN {
    paisOrigen:string
    constructor(paisOrigen:string, raza:string){
        super(raza)
        this.paisOrigen = paisOrigen  
    }

    obtenerDatos():string {
        return `El origen es ${this.paisOrigen} ${this.raza}`
        //return `El origen es ${this.paisOrigen} ${super.obtenerDatos()}`
    }
}

let objAN:AnimalN = new AnimalN("camélido")
// objAN.raza = "dromedario"
console.log(objAN.raza) 