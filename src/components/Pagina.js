'use client'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Pagina(props) {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/fundamentos">Filmes</Nav.Link>
            <Nav.Link href="/fundamentos">Filmes Populares</Nav.Link>
            <Nav.Link href="/objetos">Series</Nav.Link>
            <Nav.Link href="/objetos">Series Populares</Nav.Link>
            <Nav.Link href="/nomes">Atores</Nav.Link>
            <Navbar.Collapse id="navbar-dark-example">
        </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3">
        <h1>{props.titulo}</h1>
      </div>

      <Container>
       {props.children}
      </Container>
    </>
  )
}
