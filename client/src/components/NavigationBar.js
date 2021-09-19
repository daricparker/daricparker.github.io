import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #333;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: #ff7664;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="/">Fit-Forward</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">
              <Button variant="light">Login</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/register">
              <Button variant="secondary">Register</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
