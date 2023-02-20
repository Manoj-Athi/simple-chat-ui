import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Container, Nav } from "react-bootstrap";

const SideNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="align-items-start p-3">
      <Container className="flex-column p-0">
        <Navbar.Brand className="text-center px-4 fs-1 text-white-50">
          Neuralmind
        </Navbar.Brand>
        <Nav className="flex-column mt-5 w-100" variant="pills">
          <LinkContainer to="/train">
            <Nav.Link className="text-center my-2">Train</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/chat">
            <Nav.Link className="text-center my-2">Chat</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin">
            <Nav.Link className="text-center my-2">Admin</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SideNavbar;
