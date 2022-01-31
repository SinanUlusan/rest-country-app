import React from "react";
import { Card, Img, Title, Text, Button, Body } from "react-bootstrap";

export default function Cards(flags, name, capital, currencies) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={flags} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{capital}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
