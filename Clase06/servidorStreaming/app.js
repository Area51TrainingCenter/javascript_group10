const app = require("express")(),
	  http = require("http").createServer(app),
	  io = require("socket.io")(http),
	  port = 7000

http.listen(port, ()=> {
	console.log(`Ejecutando en el puerto ${port}`)
})

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/publico/cliente.html`)
})

app.get("/streaming", (req, res) => {
	res.sendFile(`${__dirname}/publico/servidor.html`)
})

io.on("connection", socket => {
	socket.on("recibiendo streaming", imagen =>{
		io.emit("enviando streaming", imagen)
	})
})


