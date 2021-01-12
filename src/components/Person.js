import React, { Component } from 'react'
import CardTest from './Card'

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardTest name={this.props.name}
                phone={this.props.phone}
                email={this.props.email}
      />
    )
  }
}

export default Person;
