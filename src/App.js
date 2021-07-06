import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Search from "./components/Search/Search";
import ArticleCard from "./components/ArticleCard/ArticleCard";

const App = () => {
  return (
    <>
      <header>
        <h1 variant="primary">articles</h1>
      </header>
      <Container fluid="md">
        <Search />
        <Container>
          <Row>
            <ArticleCard />
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default App;
