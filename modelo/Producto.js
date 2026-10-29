
class Producto {
    nombre = null
    precio = null
   
    description=null
    url = null
    

  
    constructor({nombre, precio, description,url}) {    
        this.nombre = nombre
        this.precio = precio
       
        this.description=description
        this.url=url
    }
     validar=(data)=> {
        const { nombre, precio, description } = data;
        
        if (!nombre || precio === undefined || precio === '' || !description) {
            return " 'nombre', 'precio' y 'descripción' son obligatorios.";
        }

        if (isNaN(precio) || Number(precio) < 0) {
            return "El precio tiene no puede ser negativo o  un valor inválido.";
        }

        return null;
    }

    get() {
        return {
            nombre: this.nombre,
            precio: +this.precio,
            description: this.description,
            url: this.url
        }
    }
}

export default Producto