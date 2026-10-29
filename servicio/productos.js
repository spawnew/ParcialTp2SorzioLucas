import ModeloMem from '../modelo/DAO/productosMem.js'


import Producto from '../modelo/Producto.js'




class Servicio {
    #modelo = null

    constructor() {
        this.#modelo = new ModeloMem()
     
    }

    obtenerProductos = async id => {
        if (id) {
            const producto = await this.#modelo.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.#modelo.obtenerProductos()
            return productos
        }
    }

    guardarProducto = async producto => {
     
        const productoModelo = new Producto(producto)
        
        
        productoModelo.validar(producto)

        const productoGuardado = await this.#modelo.guardarProducto(productoModelo.get())
        return productoGuardado
    }



    obtenerEstadisticas = async () => {
        const productos = await this.#modelo.obtenerProductos();

        if (productos.length === 0) {
            return {
                precioPromedio: 0,
                precioSumatoria: 0,
                precioMinimo: { precio: 0, nombreProducto: null },
                precioMaximo: { precio: 0, nombreProducto: null }
            };
        }

        const precioSumatoria = productos.reduce((acc, p) => acc + Number(p.precio), 0);
        const precioPromedio = precioSumatoria / productos.length;

        let minProd = productos[0];
        let maxProd = productos[0];

        for (const p of productos) {
            if (Number(p.precio) < Number(minProd.precio)) minProd = p;
            if (Number(p.precio) > Number(maxProd.precio)) maxProd = p;
        }

        return {
            precioPromedio,
            precioSumatoria,
            precioMinimo: { precio: Number(minProd.precio), nombreProducto: minProd.nombre },
            precioMaximo: { precio: Number(maxProd.precio), nombreProducto: maxProd.nombre }
        };
    }
}

export default Servicio