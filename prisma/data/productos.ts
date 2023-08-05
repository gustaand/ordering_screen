
const productos = [
  {
    nombre: "Café Caramel con Chocolate",
    precio: 5.9,
    imagen: "cafe_01",
    categoriaId: 1
  },
  {
    nombre: "Café Frio con Chocolate Grande",
    precio: 4.9,
    imagen: "cafe_02",
    categoriaId: 1
  },
  {
    nombre: "Latte Frio con Chocolate Grande",
    precio: 5.4,
    imagen: "cafe_03",
    categoriaId: 1
  },
  {
    nombre: "Latte Frio con Chocolate Grande",
    precio: 5.4,
    imagen: "cafe_04",
    categoriaId: 1
  },
  {
    nombre: "Malteada Fria con Chocolate Grande",
    precio: 5.4,
    imagen: "cafe_05",
    categoriaId: 1
  },
  {
    nombre: "Café Mocha Caliente Chico",
    precio: 3.9,
    imagen: "cafe_06",
    categoriaId: 1
  },
  {
    nombre: "Café Mocha Caliente Grande con Chocolate",
    precio: 5.9,
    imagen: "cafe_07",
    categoriaId: 1
  },
  {
    nombre: "Café Caliente Capuchino Grande",
    precio: 5.9,
    imagen: "cafe_08",
    categoriaId: 1
  },
  {
    nombre: "Café Mocha Caliente Mediano",
    precio: 4.9,
    imagen: "cafe_09",
    categoriaId: 1
  },
  {
    nombre: "Café Mocha Frio con Caramelo Mediano",
    precio: 4.9,
    imagen: "cafe_10",
    categoriaId: 1
  },
  {
    nombre: "Café Mocha Frio con Chocolate Mediano",
    precio: 4.9,
    imagen: "cafe_11",
    categoriaId: 1
  },
  {
    nombre: "Café Espresso",
    precio: 2.9,
    imagen: "cafe_12",
    categoriaId: 1
  },
  {
    nombre: "Café Capuchino Grande con Caramelo",
    precio: 5.9,
    imagen: "cafe_13",
    categoriaId: 1
  },
  {
    nombre: "Café Caramelo Grande",
    precio: 5.9,
    imagen: "cafe_14",
    categoriaId: 1
  },
  {
    nombre: "Paquete de 3 donuts de Chocolate",
    precio: 3.9,
    imagen: "donas_01",
    categoriaId: 4
  },
  {
    nombre: "Paquete de 3 donuts Glaseadas",
    precio: 3.9,
    imagen: "donas_02",
    categoriaId: 4
  },
  {
    nombre: "Dona de Fresa ",
    precio: 1.9,
    imagen: "donas_03",
    categoriaId: 4
  },
  {
    nombre: "Dona con Galleta de Chocolate ",
    precio: 1.9,
    imagen: "donas_04",
    categoriaId: 4
  },
  {
    nombre: "Dona glass con Chispas Sabor Fresa ",
    precio: 1.9,
    imagen: "donas_05",
    categoriaId: 4
  },
  {
    nombre: "Dona glass con Chocolate ",
    precio: 1.9,
    imagen: "donas_06",
    categoriaId: 4
  },
  {
    nombre: "Dona de Chocolate con MÁS Chocolate ",
    precio: 1.9,
    imagen: "donas_07",
    categoriaId: 4
  },
  {
    nombre: "Paquete de 3 donuts de Chocolate ",
    precio: 3.9,
    imagen: "donas_08",
    categoriaId: 4
  },
  {
    nombre: "Paquete de 3 donuts con Vainilla y Chocolate ",
    precio: 3.9,
    imagen: "donas_09",
    categoriaId: 4
  },
  {
    nombre: "Paquete de 6 Donuts",
    precio: 6.9,
    imagen: "donas_10",
    categoriaId: 4
  },
  {
    nombre: "Paquete de 3 Variadas",
    precio: 3.9,
    imagen: "donas_11",
    categoriaId: 4
  },
  {
    nombre: "Dona Natural con Chocolate",
    precio: 1.9,
    imagen: "donas_12",
    categoriaId: 4
  },
  {
    nombre: "Paquete de 3 Donuts de Chocolate con Chispas",
    precio: 3.9,
    imagen: "donas_13",
    categoriaId: 4
  },
  {
    nombre: "Dona Chocolate y Coco",
    precio: 1.9,
    imagen: "donas_14",
    categoriaId: 4
  },
  {
    nombre: "Paquete Galletas de Chocolate",
    precio: 2.9,
    imagen: "galletas_01",
    categoriaId: 6
  },
  {
    nombre: "Paquete Galletas de Chocolate y Avena",
    precio: 3.9,
    imagen: "galletas_02",
    categoriaId: 6
  },
  {
    nombre: "Paquete de Muffins de Vainilla",
    precio: 3.9,
    imagen: "galletas_03",
    categoriaId: 6
  },
  {
    nombre: "Paquete de 4 Galletas de Avena",
    precio: 2.4,
    imagen: "galletas_04",
    categoriaId: 6
  },
  {
    nombre: "Galletas de Mantequilla Variadas",
    precio: 3.9,
    imagen: "galletas_05",
    categoriaId: 6
  },
  {
    nombre: "Galletas de sabores frutales",
    precio: 3.9,
    imagen: "galletas_06",
    categoriaId: 6
  },
  {
    nombre: "Hamburguesa Sencilla",
    precio: 5.9,
    imagen: "hamburguesas_01",
    categoriaId: 2
  },
  {
    nombre: "Hamburguesa de Pollo",
    precio: 5.9,
    imagen: "hamburguesas_02",
    categoriaId: 2
  },
  {
    nombre: "Hamburguesa de Pollo y Chili",
    precio: 5.9,
    imagen: "hamburguesas_03",
    categoriaId: 2
  },
  {
    nombre: "Hamburguesa Queso y  Pepinos",
    precio: 5.9,
    imagen: "hamburguesas_04",
    categoriaId: 2
  },
  {
    nombre: "Hamburguesa Cuarto de Libra",
    precio: 5.9,
    imagen: "hamburguesas_05",
    categoriaId: 2
  },
  {
    nombre: "Hamburguesa Doble Queso",
    precio: 6.9,
    imagen: "hamburguesas_06",
    categoriaId: 2
  },
  {
    nombre: "Hot Dog Especial",
    precio: 4.9,
    imagen: "hamburguesas_07",
    categoriaId: 2
  },
  {
    nombre: "Paquete 2 Hot Dogs",
    precio: 6.9,
    imagen: "hamburguesas_08",
    categoriaId: 2
  },
  {
    nombre: "4 Rebanadas de Pay de Queso",
    precio: 6.9,
    imagen: "pastel_01",
    categoriaId: 5
  },
  {
    nombre: "Waffle Especial",
    precio: 4.9,
    imagen: "pastel_02",
    categoriaId: 5
  },
  {
    nombre: "Croissants De la casa",
    precio: 3.9,
    imagen: "pastel_03",
    categoriaId: 5
  },
  {
    nombre: "Pay de Queso",
    precio: 1.9,
    imagen: "pastel_04",
    categoriaId: 5
  },
  {
    nombre: "Pastel de Chocolate",
    precio: 2.9,
    imagen: "pastel_05",
    categoriaId: 5
  },
  {
    nombre: "Rebanada Pastel de Chocolate",
    precio: 2.9,
    imagen: "pastel_06",
    categoriaId: 5
  },
  {
    nombre: "Pizza Spicy con Doble Queso",
    precio: 6.9,
    imagen: "pizzas_01",
    categoriaId: 3
  },
  {
    nombre: "Pizza Jamón y Queso",
    precio: 6.9,
    imagen: "pizzas_02",
    categoriaId: 3
  },
  {
    nombre: "Pizza Doble Queso",
    precio: 6.9,
    imagen: "pizzas_03",
    categoriaId: 3
  },
  {
    nombre: "Pizza Especial de la Casa",
    precio: 6.9,
    imagen: "pizzas_04",
    categoriaId: 3
  },
  {
    nombre: "Pizza Chorizo",
    precio: 6.9,
    imagen: "pizzas_05",
    categoriaId: 3
  },
  {
    nombre: "Pizza Hawaiana",
    precio: 6.9,
    imagen: "pizzas_06",
    categoriaId: 3
  },
  {
    nombre: "Pizza Tocino",
    precio: 6.9,
    imagen: "pizzas_07",
    categoriaId: 3
  },
  {
    nombre: "Pizza Vegetales y Queso",
    precio: 6.9,
    imagen: "pizzas_08",
    categoriaId: 3
  },
  {
    nombre: "Pizza Pepperoni y Queso",
    precio: 6.9,
    imagen: "pizzas_09",
    categoriaId: 3
  },
  {
    nombre: "Pizza Aceitunas y Queso",
    precio: 6.9,
    imagen: "pizzas_10",
    categoriaId: 3
  },
  {
    nombre: "Pizza Queso, Jamón y Champiñones",
    precio: 6.9,
    imagen: "pizzas_11",
    categoriaId: 3
  }
]

export {
  productos
}