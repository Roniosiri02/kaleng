import {Nav, Navbar, NavDropdown, Container, Form, Button} from 'react-bootstrap'
import React from "react";


function Navigation () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light  ">
      <Container>
  
  <br/> <Navbar expand="lg" className="bg-light" variant='light'>
      <Container fluid>
        <Navbar.Brand href="#"> 
        <img
              src="https://sik-kdserang.upi.edu/wp-content/uploads/2022/09/logo-1024x245.png"
              width="200"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
         />
        </Navbar.Brand>
       </Container>
       </Navbar>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto fw-bold">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item a href="/profile/sejarah">Sejarah</NavDropdown.Item>
        <NavDropdown.Item a href="/profile/vimi">Visi Misi</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/fasilitas">Fasilitas</Nav.Link>
      <Nav.Link href="/faq">FAQ</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
export default Navigation;
