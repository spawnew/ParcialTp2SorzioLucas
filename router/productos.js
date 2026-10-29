import express from 'express'
import Controlador from '../controlador/productos.js'


class Router {
    #controlador = null

    constructor() {
        this.#controlador = new Controlador()
    }

    config() {
        const router = express.Router()


router.get('/listar', this.#controlador.listarProductos);


router.post('/listar', this.#controlador.guardarProducto );

router.get('/estadistica', this.#controlador.obtenerEstadisticas);

        return router
    }
}

export default Router