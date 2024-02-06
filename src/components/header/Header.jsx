import React from 'react'
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container className='navComp'>
      <Navbar.Brand href="#home"><img src="https://res.cloudinary.com/dhwqlht1d/image/upload/v1707219607/machester%20players/manchester_hlyfwg.png" width='50px' alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#matches">Matches</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#standing">Standing</Nav.Link>
          <Nav.Link href="#stats">Stats</Nav.Link>
          <Nav.Link href="#players">Players</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header