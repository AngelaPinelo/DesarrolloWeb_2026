import { useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { formatoQuetzales } from '../data/productos.js'

const itemsIniciales = [
  { id: 1, nombre: 'Laptop Ultra 15', precio: 7999.0, imagen: 'https://picsum.photos/id/1080/100/75', cantidad: 1 },
  { id: 2, nombre: 'Audífonos Inalámbricos', precio: 499.0, imagen: 'https://picsum.photos/id/103/100/75', cantidad: 2 },
  { id: 3, nombre: 'Mochila Urbana', precio: 259.0, imagen: 'https://picsum.photos/id/21/100/75', cantidad: 1 },
]

function Carrito() {
  const [items, setItems] = useState(itemsIniciales)

  const actualizarCantidad = (id, cantidad) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad: Math.max(1, cantidad) } : item)),
    )
  }

  const eliminarItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  return (
    <Container>
      <h1 className="mb-4">Tu carrito de compras</h1>

      <div className="table-responsive">
        <Table bordered hover align="middle">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.imagen} alt={item.nombre} width={80} height={60} style={{ objectFit: 'cover' }} />
                </td>
                <td>{item.nombre}</td>
                <td>{formatoQuetzales(item.precio)}</td>
                <td style={{ maxWidth: '100px' }}>
                  <Form.Control
                    type="number"
                    min={1}
                    max={10}
                    value={item.cantidad}
                    onChange={(e) => actualizarCantidad(item.id, Number(e.target.value))}
                  />
                </td>
                <td>{formatoQuetzales(item.precio * item.cantidad)}</td>
                <td>
                  <Button variant="outline-danger" size="sm" onClick={() => eliminarItem(item.id)}>
                    Quitar
                  </Button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-muted">
                  Tu carrito está vacío.
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}></td>
              <td colSpan={2}>
                <strong>Total: {formatoQuetzales(total)}</strong>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>

      <Row className="mt-4">
        <Col md={6}>
          <h2 className="h4">Datos de envío</h2>
          <Form>
            <Form.Group className="mb-3" controlId="direccion">
              <Form.Label>Dirección de entrega</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Ingresa tu dirección" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="metodoPago">
              <Form.Label>Método de pago</Form.Label>
              <Form.Select>
                <option value="tarjeta">Tarjeta de crédito/débito</option>
                <option value="transferencia">Transferencia bancaria</option>
                <option value="contra_entrega">Pago contra entrega</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="dark">
              Proceder al pago
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Carrito
