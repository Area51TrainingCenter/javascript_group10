// import {uniq} from "lodash"
// import * as metodos from "lodash"
// import {fecha, nombre} from "./src/usuario"
/*import fecha, {nombre as name, nombreCompleto, annos, genero} from "./src/usuario"

const numeros = [1, 2, 2, 5, 6, 6, 6, 8, 9, 9, 10]

console.log(metodos.uniq(numeros))
console.log(fecha)
console.log(name)
nombreCompleto("Sergio", "Hidalgo")
console.log(annos)
console.log(genero)*/

import apiRest from "./src/apirest"

/*apiRest("http://javascript.tibajodemanda.com/listar")
	.then(function(registros){
		console.table(registros)
	})
*/

const mostrarDatos = function(data) {
	console.table(data)
}

apiRest("http://javascript.tibajodemanda.com/listar", mostrarDatos)



