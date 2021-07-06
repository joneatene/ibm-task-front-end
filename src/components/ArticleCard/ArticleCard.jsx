import React from "react";
import { Col, Card } from "react-bootstrap";

const ArticleCard = ({ image, date, title, description }) => (
  <Col md={4}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} fluid />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export default ArticleCard;
