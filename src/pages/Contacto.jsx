import { Col, Container, Form, Row, Table } from 'react-bootstrap'

const horario = [
  { dia: 'Lunes a Viernes', horas: '8:00 am - 6:00 pm' },
  { dia: 'Sábado', horas: '9:00 am - 1:00 pm' },
  { dia: 'Domingo', horas: 'Cerrado' },
]

function Contacto() {
  return (
    <Container>
      <h1 className="mb-4">Ponte en contacto con nosotros</h1>
      <Row className="g-5">
        <Col md={7}>
          <Form>
            <Row className="g-3">
              <Form.Group as={Col} md={6} controlId="nombre">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="correo">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="asunto">
                <Form.Label>Asunto</Form.Label>
                <Form.Select defaultValue="consulta">
                  <option value="consulta">Consulta general</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="devolucion">Devoluciones y cambios</option>
                  <option value="sugerencia">Sugerencia</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md={12} controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} required />
              </Form.Group>
              <Col xs={12}>
                <button type="submit" className="btn btn-dark me-2">
                  Enviar mensaje
                </button>
                <button type="reset" className="btn btn-outline-secondary">
                  Limpiar formulario
                </button>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col md={5}>
          <h2 className="h4">Información de contacto</h2>
          <address>
            Tienda en Línea (Prototipo)
            <br />
            Ciudad de Guatemala, Guatemala
            <br />
            Teléfono: +502 1234-5678
            <br />
            Correo: contacto@tiendaprototipo.com
          </address>

          <h3 className="h5 mt-4">Horario de atención</h3>
          <Table bordered size="sm">
            <thead>
              <tr>
                <th>Día</th>
                <th>Horario</th>
              </tr>
            </thead>
            <tbody>
              {horario.map((fila) => (
                <tr key={fila.dia}>
                  <td>{fila.dia}</td>
                  <td>{fila.horas}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Contacto
