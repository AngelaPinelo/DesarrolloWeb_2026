import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Accordion,
  Badge,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from 'react-bootstrap'
import productos, { formatoQuetzales } from '../data/productos.js'

function ProductoDetalle() {
  const { id } = useParams()
  const producto = productos.find((p) => p.id === Number(id))
  const [cantidad, setCantidad] = useState(1)
  const [mostrarModal, setMostrarModal] = useState(false)

  if (!producto) {
    return (
      <Container>
        <h1>Producto no encontrado</h1>
        <Link to="/productos">Volver al catálogo</Link>
      </Container>
    )
  }

  const handleAgregar = (e) => {
    e.preventDefault()
    setMostrarModal(true)
  }

  return (
    <Container>
      <Row className="g-4">
        <Col md={6}>
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid rounded shadow-sm" />
        </Col>
        <Col md={6}>
          <Badge bg="secondary" className="mb-2">
            {producto.categoria}
          </Badge>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <h3 className="text-success">{formatoQuetzales(producto.precio)}</h3>

          <Form onSubmit={handleAgregar} className="mt-4">
            <Row className="g-3 align-items-end">
              <Form.Group as={Col} xs={6} controlId="cantidad">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  max={10}
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                />
              </Form.Group>
              <Col xs={6}>
                <Button type="submit" variant="dark" className="w-100">
                  Agregar al carrito
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <h2 className="mt-5 mb-3">Especificaciones</h2>
      <Table striped bordered responsive>
        <tbody>
          {Object.entries(producto.especificaciones).map(([clave, valor]) => (
            <tr key={clave}>
              <th style={{ width: '30%' }}>{clave}</th>
              <td>{valor}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Accordion className="mt-4 mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Garantía extendida</Accordion.Header>
          <Accordion.Body>
            Puedes agregar 12 meses de garantía adicional por Q499.00 al finalizar tu compra.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Envío y devoluciones</Accordion.Header>
          <Accordion.Body>
            Envíos a todo el país en un plazo de 3 a 5 días hábiles. Puedes devolver el
            producto dentro de los primeros 15 días si presenta algún desperfecto.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Producto agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Se agregaron {cantidad} unidad(es) de <strong>{producto.nombre}</strong> al carrito.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>
            Seguir comprando
          </Button>
          <Button as={Link} to="/carrito" variant="dark">
            Ir al carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default ProductoDetalle
