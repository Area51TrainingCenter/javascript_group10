export default function apiRest(url, cb, metodo="get", datos=undefined){
	let opciones = {metodo: metodo}

	if(metodo.toUpperCase()==="POST") {
		opciones.body = datos
	}

	fetch(url, opciones)
		.then(respuesta=>{
			return respuesta.json()
		})
		.then(registros => {
			cb(registros)
		})
}