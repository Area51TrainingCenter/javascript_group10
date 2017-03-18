const slides = document.querySelectorAll(".slide")

const chequear = e =>{
	slides.forEach(slide => {
		const posicionSlide = window.scrollY + window.innerHeight - slide.height/2

		// La posición del borde superior del slide
		const bordeSuperiorSlide = slide.offsetTop
		// La posición del borde inferior del slide
		const bordeInferiorSlide = slide.offsetTop + slide.height

		if(posicionSlide>=bordeSuperiorSlide && posicionSlide<=bordeInferiorSlide){
			slide.classList.add("activo")
		} else {
			slide.classList.remove("activo")
		}
	})
}


window.addEventListener("scroll", chequear)