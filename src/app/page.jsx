"use client";

import Carousel from "@/app/components/Carousel";
import Card from "@/app/components/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  return (
    <main className="container text-center" style={{ maxWidth: 854 }}>
      <div className="my-3">
        <Carousel />
      </div>
      <h3>
        A few words about this blog platform, Ghost, and how this site was made
      </h3>
      <p className=" border-bottom border-black py-3">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </p>
      <h2>All articles</h2>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            <Card id={idx + 1} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default Home;
