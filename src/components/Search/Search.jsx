import React, { useContext, useState } from "react";
import { Form, InputGroup, Button, Alert } from "react-bootstrap";
import DataProvider from "../../contexts/dataContext";
import { DataContext } from "../../contexts/dataContext";

const Search = () => {
  const dataContext = useContext(DataContext);

  //search validation
  const [validSearch, setValidSearch] = useState(true);
  const searchValidationAndKey = (e) => {
    const regEx = "^[a-zA-Z0-9 ]*$";
    setValidSearch(
      e.target.value.length !== 0
        ? e.target.value.match(regEx)
          ? true
          : false
        : true
    );

    const key = e.keyCode;
    if (key === 8 || key === 46) {
      dataContext.setData(dataContext.originalData);
    }
  };

  const searchAction = (e) => {
    e.preventDefault();
    const input = e.target.elements.searchInput.value.trim().toLowerCase();
    if (input && validSearch === true) {
      //setShowLink(true);
      dataContext.setData(
        dataContext.data
          .filter((article) => article.title.toLowerCase().includes(input))
          .slice(0, 9)
      );
      const keywords = input.split(" ");
      fetch("http://localhost:8080/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keywords }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <DataProvider>
      {validSearch === false && (
        <Alert variant="danger">
          ! Invalid input. Please use only letters and numbers.
        </Alert>
      )}
      <Form onSubmit={searchAction}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search.."
            name="searchInput"
            className="shadow-none"
            maxLength={40}
            onKeyDown={searchValidationAndKey}
          />
          <InputGroup.Append>
            <Button id="basic-addon2" type="submit">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </DataProvider>
  );
};

export default Search;
