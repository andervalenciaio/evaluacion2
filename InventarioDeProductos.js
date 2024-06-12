
let inventario = {
    productos: []
  };
  
  function agregarProducto(nombre, precio, cantidad) {
    
    let producto = {
      nombre: nombre,
      precio: precio,
      cantidad: cantidad
    };
   
    inventario.productos.push(producto);
  }
  function listarProductos() {
    inventario.productos.forEach(producto => {
      console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
    });
  }
  function totalInventario() {
    let total = 0;
    inventario.productos.forEach(producto => {
      total += producto.precio * producto.cantidad;
    });
   
    return total;
  }
  
 
  agregarProducto('auto', 50000000 , 50);
  agregarProducto('licuadora', 120000, 200);
  agregarProducto('moto', 7000000, 30);
  listarProductos();
  console.log(`Valor total del inventario: ${totalInventario()}`);
  
  






























































