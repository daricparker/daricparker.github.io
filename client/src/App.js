import "./App.css";
import "bootswatch/dist/minty/bootstrap.min.css";

import { Navbar, Container, Nav, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hello World</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="p-5">
        <Button variant="primary" size="lg" active>
          Primary button
        </Button>{" "}
        <Button variant="secondary" size="lg" active>
          Button
        </Button>
      </Container>
    </div>
  );
}

export default App;
