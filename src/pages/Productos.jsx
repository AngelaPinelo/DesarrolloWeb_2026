import { useMemo, useState } from 'react'
import { Badge, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import productos, { formatoQuetzales } from '../data/productos.js'

const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))]

function Productos() {
  const [categoria, setCategoria] = useState('Todas')
  const [orden, setOrden] = useState('relevancia')

  const productosFiltrados = useMemo(() => {
    let lista = productos.filter(
      (producto) => categoria === 'Todas' || producto.categoria === categoria,
    )

    if (orden === 'precio_asc') {
      lista = [...lista].sort((a, b) => a.precio - b.precio)
    } else if (orden === 'precio_desc') {
      lista = [...lista].sort((a, b) => b.precio - a.precio)
    }

    return lista
  }, [categoria, orden])

  return (
    <Container>
      <h1 className="mb-4">Catálogo Completo</h1>

      <Form className="row g-2 align-items-end mb-4">
        <Form.Group as={Col} sm={4} controlId="categoria">
          <Form.Label>Filtrar por categoría</Form.Label>
          <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} sm={4} controlId="orden">
          <Form.Label>Ordenar por</Form.Label>
          <Form.Select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="relevancia">Relevancia</option>
            <option value="precio_asc">Precio: menor a mayor</option>
            <option value="precio_desc">Precio: mayor a menor</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Row xs={1} sm={2} md={3} className="g-4">
        {productosFiltrados.map((producto) => (
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

      {productosFiltrados.length === 0 && (
        <p className="text-muted mt-4">No hay productos en esta categoría.</p>
      )}
    </Container>
  )
}

export default Productos
