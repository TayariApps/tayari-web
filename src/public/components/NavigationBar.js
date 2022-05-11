import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/tayarilogo.png";

export default function NavigationBar() {
  const style = {
    fontWeight: "700",
    color: "#1f4072",
  };

  return (
    <Navbar style={{ background: "#d1d5da" }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
         <img src={logo} style={{ maxWidth:'60%' }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/story" style={style}>
              Our Story
            </Nav.Link>
            <Nav.Link as={Link} to="/waitlist" style={style}>
              Waitlist
            </Nav.Link>
            <NavDropdown
              title={<span style={style}>Products</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="https://restaurant.tayari.co.tz">Our POS</NavDropdown.Item>
              <NavDropdown.Item href="https://play.google.com/store/apps/details?id=com.tayari.client.tayari">Our APP</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
