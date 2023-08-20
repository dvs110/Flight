import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import {ReactNavbar} from 'overlay-navbar'


const Head = () => {
  return (
    <>
    {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Testimonial</Nav.Link>
          </Nav>
          <Button variant="outline-primary" onClick={move}>Sign up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <ReactNavbar
    // navColor1="white"
    navColor2="hsl(219,48% 8%)"
    burgerColor="hsl(250,100%,75%)"
    burgerColorHover="hsl(250,100%,75%)"
    nav2justifyContent="space-around"
    />
    </>
  )
}

export default Head