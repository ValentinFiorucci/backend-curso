class ProductManager {
    constructor() {
        this.Productos = [];
    }

    AgregarProducto(nombre, description, price, thumbnail, stock) {
        const producto = {
            id: this.#generarId() + 1,
            nombre,
            description,
            price,
            thumbnail,
            stock
        };
        this.Productos.push(producto);
    }

    AgregarProductoF(idProducto, title) {
        const producto = this.#getProducto(idProducto);
        if (producto) {
            if (!producto.product.includes(title)) producto.product.push(title);
        } else {
            console.log('No existe');
        }
    }

    #generarId() {
        let maxId = 0;
        this.Productos.map((producto) => {
            if (producto.id > maxId) maxId = producto.id;
        });
        return maxId;
    }

    #getProducto(id) {
        return this.Productos.find((producto) => producto.id === id);
    }

    getProducts() {
        return this.Productos;
    }

    getProductById(id) {
        const producto = this.#getProducto(id);
        if (producto) {
            return producto;
        } else {
            console.log('Not found');
        }
    }
}
const productManager = new ProductManager();
productManager.AgregarProducto('Buzo', 'sin capucha', 35000, 'http', 30);
productManager.AgregarProducto('Zapatilla', 'sin cordones', 30000, 'http', 32);
productManager.AgregarProducto('media', 'larga', 5000, 'http', 15);
console.log(productManager.getProductos());
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));