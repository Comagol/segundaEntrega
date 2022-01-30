// let producto = 0
// let cantidadProducto = 0
// let precio = 0

// class Pedido {
//     constructor(producto, precio, cantidad) {
//         this.producto = producto,
//             this.precio = precio,
//             this.cantidad = cantidad,
//             this.envio = 0,
//             this.subTotal = 0,
//             this.total = 0
//     }

//     calcularSubTotal() {
//         this.subTotal = this.precio * this.cantidad;
//     }

//     calcularEnvio() {
//         if (this.subTotal >= 7500) {
//             this.envio = 0;
//         } else {
//             this.envio = 900;
//         }
//     }

//     calcularTotal() {
//         this.total = this.subTotal + this.envio;
//     }
// }

// function pedidoProducto() {
//     while (!producto || producto == 0 || producto >= 4) {
//         producto = parseFloat(prompt("¿Qué mesa ratona queres comprar?:\n 1:Redonda de madera ($3500)\n 2:Hexagonal hierro ($5000)\n 3:Cuadrada hierro y madera ($7500)"))
//     }

//     switch (producto) {
//         case 1:
//             producto = "Redonda de madera";
//             precio = 3500;
//             break;
//         case 2:
//             producto = "Hexagonal hierro";
//             precio = 5000;
//             break;
//         case 3:
//             producto = "Cuadrada hierro y madera";
//             precio = 7500
//             break
//     }

//     while (!cantidadProducto || cantidadProducto == 0) {
//         cantidadProducto = parseInt(prompt("Mesa ratona: " + producto + "\n ¿Cuántas quiere comprar? (solo números)"))
//     }
//     return new Pedido(producto, precio, cantidadProducto);
// }


// alert("Bienvenido a IndivarDeco")

// const pedido = pedidoProducto()

// pedido.calcularSubTotal()
// pedido.calcularEnvio
// pedido.calcularTotal

// alert("Detalle del pedido:\n" + "- " + pedido.producto + " X " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad + "\n" + "Total = $" + pedido.precio * pedido.cantidad);
