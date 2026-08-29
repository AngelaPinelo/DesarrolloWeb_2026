import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const enlaces = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/carrito', label: 'Carrito' },
  { to: '/registro', label: 'Registro / Iniciar sesión' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Tienda en Línea
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-principal" />
        <Navbar.Collapse id="navbar-principal">
          <Nav className="ms-auto">
            {enlaces.map((enlace) => (
              <Nav.Link as={Link} to={enlace.to} key={enlace.to}>
                {enlace.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
