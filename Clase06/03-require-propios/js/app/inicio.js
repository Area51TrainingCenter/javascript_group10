define(function(require){
	const objCorreo = require("./correos") // busca el archivo en la carpeta "app"
	const objImpresora = require("impresoras") // busca el archivo en la carpeta "js/lib" definida a través de baseUrl

	console.log(objCorreo.estado())
	console.log(objImpresora.uso())
})