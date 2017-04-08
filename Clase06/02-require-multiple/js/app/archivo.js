// alert("cargo")
define(["jquery", "moment"], function($, moment){
	$("body").html("<h1>Cargo el archivo</h1>")

	console.log(moment().format())

	const metodos = {
		saludo: function(nombre){
			alert(`Hola ${nombre}`)
		}
	}

	return metodos
})