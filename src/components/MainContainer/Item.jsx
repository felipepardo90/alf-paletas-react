import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_ItemListContainer.scss";

export default function Item({ id, name, price, stock, image }) {
  return (
    <Card className="card" key={id}>
      <Card.Img variant="top" src={image} className="card__img" />
      <Card.Body className="card__body">
        <Card.Title className="card__body--title">{name}</Card.Title>
        <Card.Text className="card__body--text">
          {stock} elementos en stock <br />
          $AR {price} <br />
        </Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary" className="card__btn">
            Ver producto
          </Button>
        </Link>{" "}
      </Card.Body>
    </Card>
  );
}
