import * as React from "react";
import {Nav, Navbar } from "react-bootstrap";

const NavBar = (): React.Node => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Five Min Journal</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav.Link href="#">Log out</Nav.Link>
    </Navbar>
  );
};

export default NavBar;
