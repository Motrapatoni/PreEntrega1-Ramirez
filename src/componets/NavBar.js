import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar className="fixed-top" bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand href="#home">
        <img alt="" src="./assets/logo-navbar.png" width="50" 
            height="50" className="d-inline-block align-center" />{' '}
          Kwik -E- Mark </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#congelados">Congelados</NavDropdown.Item>
              <NavDropdown.Item href="#bebidas">Bebidas</NavDropdown.Item>
              <NavDropdown.Item href="#loteria">Loteria</NavDropdown.Item>
              <NavDropdown.Item href="#cereales">Cereales</NavDropdown.Item>
              <NavDropdown.Item href="#comics">Comics</NavDropdown.Item>
              <NavDropdown.Item href="#ropa">Ropa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#ayuda">Ayuda</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
