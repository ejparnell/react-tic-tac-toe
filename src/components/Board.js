import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Board = ({ handleClick }) => (
    <Container>
  <Row>
    <Col onClick={handleClick} className="border-one"> 1 </Col>
    <Col onClick={handleClick} className="border-one"> 2 </Col>
    <Col onClick={handleClick}> 3 </Col>
  </Row>
  <Row>
    <Col onClick={handleClick} className="border-one"> 4 </Col>
    <Col onClick={handleClick} className="border-one"> 5 </Col>
    <Col onClick={handleClick} className="border-two"> 6 </Col>
  </Row>
  <Row>
    <Col onClick={handleClick}> 7 </Col>
    <Col onClick={handleClick} className="border-three"> 8 </Col>
    <Col onClick={handleClick}> 9 </Col>
  </Row>
</Container>
)

export default Board