"use client";

import Card from "react-bootstrap/Card";

const Cards = ({ id }) => {
  return (
    <Card>
      <Card.Img variant="top" src={`/assets/card${id}.png`} />
      <Card.Body>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
