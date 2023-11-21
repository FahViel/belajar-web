import React from 'react'
import { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

function MyCounter({onClick}){
  if (onClick > 9 || onClick < 0 ){
    onClick = "done!"
  }
}

function PlusMinus() {
  const [onClick, setOnClick ] = useState(0)

  function HandleClickPlus() {
    setOnClick(onClick + 1)
  }

  function HandleClickMinus(){
    setOnClick(onClick - 1)
  }

  function HandleClickReset(){
    setOnClick(0)
  }


  return (
    <div>
      <Container>
        <Container>
          <Row md={4} className="justify-content-md-center mt-3">
            <Col>
              <Button onClick={HandleClickPlus}>+</Button>
            </Col>
            <Col xs={6}>
              <MyCounter onClick={onClick}/>
            </Col>
            <Col>
              <Button onClick={HandleClickMinus}>-</Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row md={4} className="justify-content-md-center mt-3">
            <Col>
              <Button onClick={HandleClickReset}>Reset</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default PlusMinus
