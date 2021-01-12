import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Person from './components/Person'

const App = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="4" sm="4">.col-6 .col-sm-4</Col>
        <Col xs="4" sm="4">.col-6 .col-sm-4</Col>
        <Col xs="4" sm="4">.col-6 .col-sm-4</Col>
      </Row>
      <Person name="Jonathan Scarpelli"
              phone="917-622-0830"
              email="test@scarcrux.com"
      />
      <Person name="Jonathan Scarpelli"
              phone="917-622-0830"
              email="test@scarcrux.com"
      />
      <Person name="Jonathan Scarpelli"
              phone="917-622-0830"
              email="test@scarcrux.com"
      />
    </Container>
  );
}

export default App;
