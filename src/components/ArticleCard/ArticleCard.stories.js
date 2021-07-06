import React from "react";
import { Row } from "react-bootstrap";
import "../../App.scss";

import ArticleCard from "./ArticleCard";

export default {
  component: ArticleCard,
  title: "Components/Card",
};

export const PrimaryCard = () => (
  <Row>
    <ArticleCard
      image="https://www.reuters.com/resizer/nm7hHjt9YaES-Sp0ebxCrxT6vk0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/G2QZY6I53JJ27GXRPS76QWEHTE.jpg"
      title="Ohio ethics rule says firms can't use rivals' names to rig search results - Reuters"
      date="2021-06-08 22.45"
      description="Lawyers and law firms in Ohio can't purchase a rival's name for use in competitive keyword online advertising, the Ohio Board of Professional Conduct held earlier this month, after a member of a personal injury law firm sought guidance on the issue."
    />
  </Row>
);
