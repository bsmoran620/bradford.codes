import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export function Navigation() {
  return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">Brad Moran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/resume">Resume</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects/my-travel">MyTravel</NavDropdown.Item>
              <NavDropdown.Item href="/projects/2">Trip Planner</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}