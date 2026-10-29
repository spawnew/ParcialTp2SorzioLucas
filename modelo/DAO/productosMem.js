class ModeloMem {
    #productos = []

    constructor() {
        const productos = []

        this.#productos = productos
    }

   

    obtenerProductos = async () => this.#productos

    obtenerProducto = async id => {
        const producto = this.#productos.find(p => p.id == id)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = String(parseInt(this.#productos[this.#productos.length-1]?.id || 0) + 1)       
        this.#productos.push(producto)
        return producto
    }

 

}

export default ModeloMem