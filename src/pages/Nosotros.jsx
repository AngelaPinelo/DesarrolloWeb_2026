import { Accordion, Col, Container, Row, Table } from 'react-bootstrap'

const equipo = [
  {
    nombre: 'Angela Gabriela Pinelo Flores',
    carnet: '9490-24-1578',
    rol: 'Desarrolladora del proyecto (React + Bootstrap)',
  },
]

function Nosotros() {
  return (
    <Container>
      <h1 className="mb-4">¿Quiénes somos?</h1>
      <Row>
        <Col lg={8}>
          <p>
            Somos un prototipo de tienda en línea desarrollado con fines académicos para el
            curso de Desarrollo Web. En esta fase, el sitio fue reconstruido utilizando React
            y React-Bootstrap para aplicar componentización, modularidad y diseño responsivo.
          </p>

          <Accordion className="mb-4">
            <Accordion.Item eventKey="mision">
              <Accordion.Header>Misión</Accordion.Header>
              <Accordion.Body>
                Ofrecer una experiencia de compra en línea sencilla y accesible, apoyada en una
                interfaz moderna, modular y adaptable a cualquier dispositivo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="vision">
              <Accordion.Header>Visión</Accordion.Header>
              <Accordion.Body>
                Convertirnos en un caso de estudio de referencia sobre cómo construir una tienda
                en línea interactiva utilizando React y Bootstrap.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="valores">
              <Accordion.Header>Valores</Accordion.Header>
              <Accordion.Body>
                <ol className="mb-0">
                  <li>Honestidad</li>
                  <li>Responsabilidad</li>
                  <li>Trabajo en equipo</li>
                  <li>Orientación al cliente</li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <h2 className="h4">Equipo de desarrollo</h2>
      <div className="table-responsive">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Nombre completo</th>
              <th>Carnet</th>
              <th>Rol / Módulos aportados</th>
            </tr>
          </thead>
          <tbody>
            {equipo.map((integrante) => (
              <tr key={integrante.carnet}>
                <td>{integrante.nombre}</td>
                <td>{integrante.carnet}</td>
                <td>{integrante.rol}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

export default Nosotros
