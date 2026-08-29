const productos = [
  {
    id: 1,
    nombre: 'Laptop Ultra 15',
    categoria: 'Electrónica',
    precio: 7999.0,
    imagen: 'https://picsum.photos/id/1080/500/350',
    descripcion:
      'La Laptop Ultra 15 combina un diseño ligero con un rendimiento excepcional, ideal para trabajo, estudio y entretenimiento.',
    especificaciones: {
      Marca: 'TechStore',
      Modelo: 'Ultra 15 - 2026',
      Procesador: 'Intel Core i7 de 13va generación',
      'Memoria RAM': '16 GB',
      Almacenamiento: '512 GB SSD',
      Color: 'Gris espacial',
      Garantía: '12 meses',
    },
    destacado: true,
  },
  {
    id: 2,
    nombre: 'Audífonos Inalámbricos',
    categoria: 'Electrónica',
    precio: 499.0,
    imagen: 'https://picsum.photos/id/103/500/350',
    descripcion: 'Cancelación de ruido activa y batería de hasta 30 horas de duración.',
    especificaciones: {
      Marca: 'TechStore',
      Conectividad: 'Bluetooth 5.3',
      Batería: 'Hasta 30 horas',
      Color: 'Negro',
      Garantía: '6 meses',
    },
    destacado: true,
  },
  {
    id: 3,
    nombre: 'Mochila Urbana',
    categoria: 'Accesorios',
    precio: 259.0,
    imagen: 'https://picsum.photos/id/21/500/350',
    descripcion: 'Impermeable, con compartimento acolchado para laptop de hasta 15 pulgadas.',
    especificaciones: {
      Material: 'Poliéster impermeable',
      Capacidad: '25 litros',
      Color: 'Gris oscuro',
      Garantía: '3 meses',
    },
    destacado: true,
  },
  {
    id: 4,
    nombre: 'Cafetera Eléctrica',
    categoria: 'Hogar',
    precio: 349.0,
    imagen: 'https://picsum.photos/id/96/500/350',
    descripcion: 'Capacidad de 12 tazas, con función programable y jarra de vidrio.',
    especificaciones: {
      Capacidad: '12 tazas',
      Potencia: '900 W',
      Color: 'Negro/Acero',
      Garantía: '12 meses',
    },
    destacado: false,
  },
  {
    id: 5,
    nombre: 'Camisa Casual',
    categoria: 'Ropa',
    precio: 149.0,
    imagen: 'https://picsum.photos/id/26/500/350',
    descripcion: '100% algodón, disponible en varias tallas y colores.',
    especificaciones: {
      Material: '100% algodón',
      Tallas: 'S, M, L, XL',
      Color: 'Azul claro',
      Garantía: 'No aplica',
    },
    destacado: false,
  },
  {
    id: 6,
    nombre: 'Reloj Deportivo',
    categoria: 'Accesorios',
    precio: 699.0,
    imagen: 'https://picsum.photos/id/160/500/350',
    descripcion: 'Resistente al agua, con monitor de ritmo cardíaco y GPS integrado.',
    especificaciones: {
      Marca: 'TechStore',
      Resistencia: '5 ATM',
      Batería: 'Hasta 7 días',
      Color: 'Negro',
      Garantía: '12 meses',
    },
    destacado: false,
  },
]

export const formatoQuetzales = (valor) =>
  `Q${valor.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

export default productos
