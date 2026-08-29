import { Badge, Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import productos, { formatoQuetzales } from '../data/productos.js'

const promociones = [
  {
    titulo: 'Envío gratis en tu primera compra',
    texto: 'Aplica en pedidos mayores a Q300.00 dentro de la ciudad capital.',
    imagen: 'https://picsum.photos/id/180/1200/450',
  },
  {
    titulo: 'Hasta 20% de descuento en Electrónica',
    texto: 'Laptops, audífonos y más, por tiempo limitado.',
    imagen: 'https://picsum.photos/id/119/1200/450',
  },
  {
    titulo: 'Nueva colección de accesorios',
    texto: 'Mochilas, relojes y complementos para tu día a día.',
    imagen: 'https://picsum.photos/id/48/1200/450',
  },
]

function Inicio() {
  const destacados = productos.filter((producto) => producto.destacado)

  return (
    <Container>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Tienda en Línea</h1>
          <p className="lead">Todo lo que necesitas, a un clic de distancia.</p>
        </Col>
      </Row>

      <Carousel className="mb-5 shadow-sm">
        {promociones.map((promo) => (
          <Carousel.Item key={promo.titulo}>
            <img className="d-block w-100" src={promo.imagen} alt={promo.titulo} style={{ maxHeight: '420px', objectFit: 'cover' }} />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
              <h3>{promo.titulo}</h3>
              <p>{promo.texto}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="mb-3">Productos destacados</h2>
      <Row xs={1} sm={2} md={3} className="g-4 mb-5">
        {destacados.map((producto) => (
          <Col key={producto.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
              <Card.Body className="d-flex flex-column">
                <Badge bg="secondary" className="mb-2 align-self-start">
                  {producto.categoria}
                </Badge>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text className="flex-grow-1">{producto.descripcion}</Card.Text>
                <Card.Text className="fw-bold">{formatoQuetzales(producto.precio)}</Card.Text>
                <Button as={Link} to={`/productos/${producto.id}`} variant="dark">
                  Ver detalle
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>¿Por qué comprar con nosotros?</h2>
          <ul>
            <li>Envíos a todo el país</li>
            <li>Garantía en todos los productos</li>
            <li>Atención al cliente personalizada</li>
            <li>Pagos seguros</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Inicio
