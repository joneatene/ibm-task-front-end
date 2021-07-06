import React from "react";
import { Col, Card } from "react-bootstrap";

const ArticleCard = ({ image, date, url, title, description }) => {
  const articleClickFunction = () => {
    window.open(url, "_blank");

    fetch("http://localhost:8080/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image, description, date, url }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Col xs={12} sm={12} md={6} lg={4} onClick={articleClickFunction}>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted date">
            {`${date.slice(0, 10)} ${date.slice(11, 16)}`}
          </Card.Subtitle>
          <Card.Text className="description">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleCard;
