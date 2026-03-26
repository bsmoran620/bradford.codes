import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Navbar.Brand as={Link} to="/">
        Brad Moran
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* timeout={0}: skip height transition — iOS Safari often blanks the view with .collapsing */}
      <Navbar.Collapse id="basic-navbar-nav" timeout={0}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/resume">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/my-travel">
            MyTravel
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/2">
            Trip Planner
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}