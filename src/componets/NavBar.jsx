import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, BrowserRouter, Route, Routes } from 'react-router-dom';
import { NAVBAR_CATEGORIES_ROUTES } from '../routes/categoriesRoutes'; 
import { NAVBAR_PRINCIPAL_ROUTES } from '../routes/principalsRoutes';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar className="fixed-top" bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img alt="" src="./assets/logo-navbar.png" width="50" height="50" className="d-inline-block align-center" />{' '}
          Kwik -E- Mark
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {NAVBAR_CATEGORIES_ROUTES.map(route => (
                <NavDropdown.Item as={NavLink} to={route.path} key={route.path}>
                  {route.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {NAVBAR_PRINCIPAL_ROUTES.map(route => (
                <Nav.Link as={NavLink} to={route.path} key={route.path}>
                  {route.name}
                </Nav.Link>
              ))}
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/carrito">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
