import React from "react";
import { Col, Card } from "react-bootstrap";

const ArticleCard = ({ image, date, title, description }) => (
  <Col md={4}>
    <Card style={{ width: "18rem" }}>
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

export default ArticleCard;
