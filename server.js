import express from 'express'
import RouterProductos from './router/productos.js'


class Server {
    #port = null
    #routerProductos = null

    constructor(port) {
        this.#port = port
        this.#routerProductos = new RouterProductos()
    }

    start() {
        const app = express()
        
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))

        app.use(express.static('public'))

     
        app.use('/productos', this.#routerProductos.config())

        const server = app.listen(this.#port, () => console.log(`Servidor  escuchando en http://localhost:${this.#port}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server