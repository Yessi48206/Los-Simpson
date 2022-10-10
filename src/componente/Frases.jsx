import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const frases = () => {
  return (
    <Container>
      <Card className="bg-dark">
        <Row>
          <Col md={4}>
            <Card.Img
              variant="start"
              src="https://trello.com/1/cards/6328e276517f8e0208590f76/attachments/632b887c5d55fc04a2c53b56/previews/632b887d5d55fc04a2c53b5d/download/image.png"
              alt="logo homero"
              className="w-100"
            ></Card.Img>
          </Col>
          <Col md={8}>
            <Card.Body className="text-light">
              <Card.Title>Homero Simpsons</Card.Title>
              <Card.Text className="my-3">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                sapiente id dignissimos delectus, iusto doloremque numquam sit
                ipsum mollitia ad molestiae ratione enim nemo consequatur.
                Maiores aut sed pariatur quod. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
                sint.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default frases;
