window.addEventListener("DOMContentLoaded", ()=>{
	// Referencias a elementos

	const paletaIzquierda = document.querySelector("div.paleta.izquierda"),
		  paletaDerecha = document.querySelector("div.paleta.derecha")

	const pelota = document.querySelector("div.pelota")

	const marcadorIzquierdo = document.querySelector("div.marcador.izquierdo"),
	      marcadorDerecho = document.querySelector("div.marcador.derecho")

    const alturaPagina = document.body.offsetHeight,
    	  anchoPagina = document.body.offsetWidth

    // Posición inicial de la pelota respecto a su contenedor (el body)
    let pxPelota = pelota.offsetLeft, 
        pyPelota = pelota.offsetTop

     // Puntajes
     let puntajeIzquierdo = 0, puntajeDerecho = 0

    const diametroPelota = pelota.offsetWidth

    // Variables de sonidos
    let sndMusica, sndPunto, sndRebote

    // Detecta si la pelota choca con una de las paletas
    const detectarColisionPaleta = () => {
    	const ball = {
    		x: pelota.offsetLeft,
    		y: pelota.offsetTop,
    		width: diametroPelota,
    		height: diametroPelota
    	}

    	const paleta1 = {
    		x: paletaIzquierda.offsetLeft,
    		y: paletaIzquierda.offsetTop,
    		width: paletaIzquierda.offsetWidth,
    		height: paletaIzquierda.offsetHeight
    	}

    	const paleta2 = {
    		x: paletaDerecha.offsetLeft,
    		y: paletaDerecha.offsetTop,
    		width: paletaDerecha.offsetWidth,
    		height: paletaDerecha.offsetHeight
    	}


		if (ball.x < paleta1.x + paleta1.width &&
		   ball.x + ball.width > paleta1.x &&
		   ball.y < paleta1.y + paleta1.height &&
		   ball.height + ball.y > paleta1.y) {
		   	return true
		}

		if (ball.x < paleta2.x + paleta2.width &&
		   ball.x + ball.width > paleta2.x &&
		   ball.y < paleta2.y + paleta2.height &&
		   ball.height + ball.y > paleta2.y) {
		   	return true
		}

		return false
    }

    // Actualiza el marcador
    const actualizarMarcador = () => {
    	marcadorDerecho.innerHTML = puntajeDerecho
    	marcadorIzquierdo.innerHTML = puntajeIzquierdo
    }

    // Coloca la pelota al medio de la pantalla cuando se consigue un punto
    const posicionarPelota = () => {
    	pelota.style.top = `${alturaPagina/2}px`
    	pelota.style.left = `${anchoPagina/2}px`

    	pxPelota = pelota.offsetLeft
        pyPelota = pelota.offsetTop
    }

    // Cargar Sonidos
    const cargarSonidos = () => {
    	sndMusica = document.createElement("audio")
    	sndMusica.src = "sonidos/Pamgaea.mp3"
    	sndMusica.loop = true
    	sndMusica.volume = .3
    	sndMusica.addEventListener("loadeddata", ()=>{
    		sndMusica.play()
    	})

    	sndPunto = document.createElement("audio")
    	sndPunto.src = "sonidos/coin.wav"
    	sndPunto.volume = .1

    	sndRebote = document.createElement("audio")
    	sndRebote.src = "sonidos/bounce.wav"
    	sndRebote.volume = .2
    }

    // La función "requestAnimationFrame" está implementada de forma diferente por los navegadores
    const ftnAnimacion = window.requestAnimationFrame || window.webkitRequestAnimationFrame || mozRequestAnimationFrame || msRequestAnimationFrame || oRequestAnimationFrame || function(f) {
    		return setTimeout(f, 1000/60)
        }

    let dx = 10, dy = -10

    const mover = () => {
    	

    	// Verifica que la pelota no se vaya de la pantalla a través del eje horizontal
    	const limiteIzquierdo = (pxPelota + dx < 0) ? true : false
    	const limiteDerecho = (pxPelota + diametroPelota/2 + dx > anchoPagina) ? true: false

    	// Si la pelota está saliendo de la pantalla (eje horizontal), cambio el signo del desplazamiento horizontal (eso produce el "rebote")
    	// dx = (limiteIzquierdo || limiteDerecho) ? dx*-1 : dx
    	if(limiteIzquierdo || limiteDerecho) {
    		sndPunto.play()
    		dx *= -1

    		puntajeIzquierdo = limiteDerecho ? puntajeIzquierdo+1 : puntajeIzquierdo
    		puntajeDerecho = limiteIzquierdo ? puntajeDerecho+1 : puntajeDerecho

    		actualizarMarcador()
    		posicionarPelota()
    	}

    	// Verifica que la pelota no se vaya de la pantalla a través del eje vertical
    	const limiteSuperior = (pyPelota + dy < 0) ? true : false
    	const limiteInferior = (pyPelota + diametroPelota/2 + dy > alturaPagina) ? true : false

    	// Si la pelota está saliendo de la pantalla (eje vertical), cambio el signo del desplazamiento horizontal (eso también produce un "rebote")
    	dy = (limiteSuperior || limiteInferior) ? dy*-1 : dy

    	if(limiteInferior || limiteSuperior) {
    		sndRebote.play()
    	}

    	if(detectarColisionPaleta()) {
    		dx*=-1
    		sndRebote.play()
    	}
		// dx = detectarColisionPaleta() ? dx*-1 : dx

    	pxPelota += dx
    	pyPelota += dy

    	pelota.style.top = `${pyPelota}px`
    	pelota.style.left = `${pxPelota}px`

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

	cargarSonidos()

	ftnAnimacion(mover)
})