import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavAll = () => {
  const icon1 = <FontAwesomeIcon style={{ color: '#FF682D' }} icon={faUserAlt} />
 

    return (
        
  <Container fluid="md">
        <Navbar className="px-4 sticky-top fw-bold"  collapseOnSelect expand="lg"  variant="light">
  <Navbar.Brand href="/"><img width="180" src="https://i.ibb.co/MBZSKFv/logo.png" alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/package">Tours</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
     
            </Nav>
      {/* user  */}
     <Nav>
        <NavDropdown title={icon1} id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/myTours">My Tours</NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item onClick="">LogOut</NavDropdown.Item>
                    
              </NavDropdown>
              {/* Admin */}
        <NavDropdown title="Admin" id="collapsible-nav-dropdown" >
            <NavDropdown.Item as={Link} to="/addTours">Add Tours</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manageTours">Manage Tours</NavDropdown.Item>
                <NavDropdown.Divider />
            <NavDropdown.Item onClick="">LogOut</NavDropdown.Item>
        </NavDropdown>
        
        <Nav.Link as={Link} to="/login">{ icon1} Login</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Container>
    );
};

export default NavAll;