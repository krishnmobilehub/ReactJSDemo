import React from "react"
import { Button } from 'reactstrap'

class DemoButton extends React.Component {
  render() {
  	return (
      <Button color={this.props.color} onClick={this.props.onClick} id={this.props.id}>{this.props.name}</Button>
  	);
  }
}

export default DemoButton;
