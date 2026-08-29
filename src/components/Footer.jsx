import { Container, Table } from 'react-bootstrap'

const integrantes = [
  {
    nombre: 'Angela Gabriela Pinelo Flores',
    carnet: '9490-24-1578',
    modulos: 'Todos los componentes y páginas (Navbar, Footer, Inicio, Productos, Detalle, Carrito, Registro, Contacto, Nosotros)',
  },
]

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <h2 className="h5">Equipo de desarrollo</h2>
        <div className="table-responsive">
          <Table variant="dark" bordered size="sm" className="mb-3">
            <thead>
              <tr>
                <th>Nombre completo</th>
                <th>Carnet</th>
                <th>Módulos aportados</th>
              </tr>
            </thead>
            <tbody>
              {integrantes.map((integrante) => (
                <tr key={integrante.carnet}>
                  <td>{integrante.nombre}</td>
                  <td>{integrante.carnet}</td>
                  <td>{integrante.modulos}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <p className="mb-0 small text-center">
          Tienda en Línea (Prototipo React + Bootstrap) &mdash; Desarrollo Web 2026
        </p>
      </Container>
    </footer>
  )
}

export default Footer
