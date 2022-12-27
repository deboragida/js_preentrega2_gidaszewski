let cantidad = 0;
let detalle = 0;
let precio = 0;

parseFloat(cantidad);
parseFloat(precio);

function productos (cantidad, detalle, precio) {
    this.cantidad = cantidad;
    this.detalle = detalle;
    this.precio = precio;
}

const prod1 = new productos (cantidad, detalle, precio);

const ventas = [prod1];

for (let i = 0; i < ventas.length; i ++){

    let cantidad = prompt ("Ingresá la cantidad vendida");
    let detalle = prompt ("Ingresá el nombre del producto");
    let precio = prompt ("Ingresá el precio del producto que figura en el catálogo");

    parseFloat (cantidad);
    parseFloat (precio);

    function calcularComision (precio) {
    return (precio * cantidad) * 0.3 
    }
    
    let comisionVenta = calcularComision (precio)
    alert ("Tu ganancia es: " + comisionVenta)
    
    function comisionNatura (precio) {
    return (precio * cantidad) - (comisionVenta)
    }
    
    let pagoNatura = comisionNatura (precio)
    alert ("Debes pagarle a Natura Cosmeticos: " + pagoNatura);
}

console.log (ventas);