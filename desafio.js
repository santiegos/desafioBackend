class ProductManager {
  constructor() {
    this.productos = [];
  }

  getProductos() {
    return this.productos;
  }

  addProducts(titulo, descripcion, precio, code, stock) {
  
    let codeExists = this.productos.some((producto) => producto.code === code);
    if (codeExists) {
      return console.log(`El código "${code}" ya está en uso.`);
    } else {
      let id = this.productos.length;
      let producto = {
        id: ++id,
        titulo: titulo,
        descripcion: descripcion,
        precio: precio,
        code: code,
        stock: stock,
      };
      this.productos.push(producto);
    }
    return this.productos;
  }

  getProductsById(id_producto) {
    let producto = this.productos.find(
      (producto) => producto.id === id_producto
    );

    if (producto) {
      return producto;
    } else {
      return console.log("not found");
    }
  }
}




const nuevoProd = new ProductManager();
nuevoProd.addProducts(
  "Prueba",
  "prueba de producto",
  500,
  "imagen",
  "odn515",
  10
);
console.log(nuevoProd.getProductos());
