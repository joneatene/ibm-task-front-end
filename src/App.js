import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Search from "./components/Search/Search";
import ArticleCard from "./components/ArticleCard/ArticleCard";

const App = () => {
  //getting data
  const [originalData, setOriginalData] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=a25beac6627549929d0e37c1ebd2ea3b"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
        setOriginalData(data.articles);
      });
  }, []);
  return (
    <>
      <header>
        <h1 variant="primary">articles</h1>
      </header>
      <Container fluid="md">
        <Search />
        <Container>
          <Row>
            {data &&
              data.map((article) => (
                <ArticleCard
                  title={article.title}
                  description={article.description}
                  image={article.urlToImage}
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
