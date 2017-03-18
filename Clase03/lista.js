const inputs = document.querySelectorAll("input")

let ultimoCheckPresionado

const chequear = function(ev){
	
	let marcar = false

	// ev.shiftKey indica si tengo presionada o no la tecla Shift al momento de marcar el checkbox
	if(ev.shiftKey && this.checked){
		inputs.forEach(inputSel => {
			if(inputSel===ultimoCheckPresionado || inputSel===this){
				marcar = !marcar
			}

			if(marcar) {
				inputSel.checked = true
			}
		})
	}

	// Esta variable guarda una referencia al input (checkbox) que acabo de presionar
	ultimoCheckPresionado = this
}

inputs.forEach(input => {
	input.addEventListener("click", chequear)
})