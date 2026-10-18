const productos = [
  { nombre: "Polo TECSUP", precioo: 25.00, cantidad: 2 },
  { nombre: "Taza TECSUP", precioo: 18.00, cantidad: 1 }
];

function calcularTotal(lista) {
  let total = 0;
  for (const producto of lista) {
    total = total + producto.precioo * producto.cantidad;
  }
  return total;
}

document.getElementById("total").textContent =
  "Total: S/ " + calcularTotal(productos).toFixed(2);

  //correccion aaaaaaaaaaa