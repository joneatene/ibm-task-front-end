import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Search from "./components/Search/Search";
import ArticleCard from "./components/ArticleCard/ArticleCard";

import { DataContext } from "./contexts/dataContext";

const App = () => {
  const dataContext = useContext(DataContext);

  const [data, setData] = useState();
  useEffect(() => setData(dataContext.data), [dataContext.data]);

  return (
    <>
      <header>
        <h1 variant="primary">articles</h1>
      </header>
      <Container fluid="md">
        <Search />
        <Container>
          <Row>
            {data && data.length === 0 && (
              <Alert variant="secondary">Sorry, no articles :(</Alert>
            )}
            {data &&
              data.map((article) => (
                <ArticleCard
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  date={article.publishedAt}
                  url={article.url}
                  key={article.title}
                />
              ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default App;
