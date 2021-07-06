import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const Search = () => {
  return (
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
  );
};

export default Search;
