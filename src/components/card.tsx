import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Col, Row } from "react-bootstrap";

function card() {
  return (
    <Container
      fluid="md"
      className="d-flex justify-content-center h-100 align-items-center "
    >
      <Row>
        <Col xs={12} lg={12} className="mx-auto">
          <Card>
            <Card.Img src="assets/404.svg" />
            <Card.Body>
              <Card.Text className="text-center">
                OOPS, LO SENTIMOS LA PAGINA QUE INTENTAS VER <br />
                NO SE ENCUENTRA POR EL MOMENTO.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default card;
