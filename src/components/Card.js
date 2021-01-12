import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class CardTest extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{this.props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.phone}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.email}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>
  );
  }
};

export default CardTest;
