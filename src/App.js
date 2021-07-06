import React from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  return (
    <>
      <header>
        <h1 variant="primary">articles</h1>
      </header>
      <Container fluid="md">
        <Form>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search.."
              name="searchInput"
              maxlength={40}
            />
            <InputGroup.Append>
              <Button id="basic-addon2">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Container>
    </>
  );
};
export default App;
