window.addEventListener("DOMContentLoaded", ()=>{
	// Referencias a elementos

	const paletaIzquierda = document.querySelector("div.paleta.izquierda"),
		  paletaDerecha = document.querySelector("div.paleta.derecha")

    const alturaPagina = document.body.offsetHeight,
    	  anchoPagina = document.body.offsetWidth

    // Posición inicial de la pelota respecto a su contenedor (el body)
    let pxPelota = pelota.offsetLeft, 
        pyPelota = pelota.offsetTop

    // La función "requestAnimationFrame" está implementada de forma diferente por los navegadores
    const ftnAnimacion = window.requestAnimationFrame || window.webkitRequestAnimationFrame || mozRequestAnimationFrame || msRequestAnimationFrame || oRequestAnimationFrame || function(f) {
    		return setTimeout(f, 1000/60)
        }

    let dx = 10, dy = -10

    const mover = () => {
    	pxPelota += dx
    	pyPelota += dy

    	pelota.style.top = `${pxPelota}px`
    	pelota.style.left = `${pyPelota}px`
    	
    	ftnAnimacion(mover)
    }

    // Declaración de eventos
	window.addEventListener("mousemove", e => {
		if(e.pageY - paletaIzquierda.offsetHeight/2 < 0) return false
		if(e.pageY + paletaIzquierda.offsetHeight/2 > alturaPagina) return false

		// Las paletas se moveran en la misma dirección del mouse
		paletaIzquierda.style.top = `${e.pageY}px`
		paletaDerecha.style.top = `${e.pageY}px`
	})

	ftnAnimacion(mover)








})