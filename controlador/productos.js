import Servicio from '../servicio/productos.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
    }

    listarProductos = async (req, res) => {
        try {
           
            const { id } = req.params
            const producto_s = await this.#servicio.obtenerProductos(id)
             if (!id && Array.isArray(producto_s) && producto_s.length === 0) {
                return res.status(200).send('No hay productos para listar');
            }
            res.json(producto_s)
        }
        catch (error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }
    }

    guardarProducto = async (req, res) => {
        try {
            const producto = req.body
          
            if (Object.keys(producto).length == 0) throw new Error('El producto está vacío')

            const productoGuardado = await this.#servicio.guardarProducto(producto)
            res.json(productoGuardado)   
           
        }
        catch (error) {
            
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }
    }
    obtenerEstadisticas = async (req, res) => {
        try {
            const estadisticas = await this.#servicio.obtenerEstadisticas();
            res.json(estadisticas);
        }
        catch (error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message });
        }
    }
           
}
export default Controlador