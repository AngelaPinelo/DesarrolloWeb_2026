import { Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap'

function Registro() {
  return (
    <Container>
      <h1 className="mb-4">Registro / Iniciar sesión</h1>
      <Row>
        <Col lg={8}>
          <Tabs defaultActiveKey="registro" className="mb-4">
            <Tab eventKey="registro" title="Crear una cuenta">
              <Form className="mt-3">
                <Row className="g-3">
                  <Form.Group as={Col} md={6} controlId="nombre">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="correo">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" required />
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="usuario">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="fechaNacimiento">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" required />
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="passwordConfirm">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control type="password" required />
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="pais">
                    <Form.Label>País</Form.Label>
                    <Form.Select defaultValue="guatemala">
                      <option value="guatemala">Guatemala</option>
                      <option value="mexico">México</option>
                      <option value="el_salvador">El Salvador</option>
                      <option value="honduras">Honduras</option>
                      <option value="otro">Otro</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md={12} controlId="direccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                  </Form.Group>
                  <Col xs={12}>
                    <Form.Check type="checkbox" id="terminos" label="Acepto los términos y condiciones" required />
                    <Form.Check type="checkbox" id="boletin" label="Deseo recibir promociones por correo" />
                  </Col>
                  <Col xs={12}>
                    <button type="submit" className="btn btn-dark me-2">
                      Registrarme
                    </button>
                    <button type="reset" className="btn btn-outline-secondary">
                      Limpiar formulario
                    </button>
                  </Col>
                </Row>
              </Form>
            </Tab>

            <Tab eventKey="login" title="Ya tengo una cuenta">
              <Form className="mt-3">
                <Form.Group className="mb-3" controlId="loginUsuario">
                  <Form.Label>Usuario o correo electrónico</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Form.Check className="mb-3" type="checkbox" id="recordar" label="Recordar mi sesión" />
                <button type="submit" className="btn btn-dark">
                  Iniciar sesión
                </button>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default Registro
