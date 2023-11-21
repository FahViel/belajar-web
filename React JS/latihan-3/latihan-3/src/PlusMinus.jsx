import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "bootstrap";

function PlusMinus() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button>-</Button>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Button>+</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PlusMinus