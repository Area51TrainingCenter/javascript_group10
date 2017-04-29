class CursosArea51 {
    public total:number
    static totalCursos:number = 100

    constructor(nuevos:number, salientes:number){
        this.total = nuevos - salientes
    }

    obtenerTotalCursos():number {
        return CursosArea51.totalCursos
    }
} 

console.log(CursosArea51.totalCursos)