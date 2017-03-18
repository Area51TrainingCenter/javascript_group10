const lugares = document.querySelectorAll("section.lugar")

const mostrarLugar = function(){
	this.classList.add("activo")
}

const mostrarTextos = function(ev){
	if(ev.propertyName.includes("flex")) {
		this.classList.add("desplegar")
	}
}

lugares.forEach(lugar => {
	lugar.addEventListener("click", mostrarLugar)
	lugar.addEventListener("transitionend", mostrarTextos)
})