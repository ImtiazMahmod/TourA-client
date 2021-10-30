import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavAll = () => {
  const { user ,logout} = useAuth()
  
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
            {user?.email ?
              <div className="d-flex justify-content-center">
                <img width="40" className="img-fluid rounded-circle" src={user?.photoURL} alt="" /> 
                <p className="fw-normal m-2">{user?.displayName }</p>
             <NavDropdown className="border-0" title={icon1} id="collapsible-nav-dropdown">
                 <NavDropdown.Item as={Link} to="/myTours">My Tours</NavDropdown.Item>
                 <NavDropdown.Item as={Link} to="/addTours">Add Tours</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to="/manageTours">Manage Tours</NavDropdown.Item>
               
                 <NavDropdown.Divider />
                   <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
                 </NavDropdown>  
              </div> 
             :
             <Nav.Link as={Link} to="/login">{ icon1} Login</Nav.Link>
            }
            </Nav>
          
  </Navbar.Collapse>
</Navbar>
  </Container>
    );
};

export default NavAll;