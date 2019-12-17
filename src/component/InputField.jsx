import React from "react";
import { InputGroup, Input } from 'reactstrap'

class InputField extends React.Component {  
  render() {
    return (
	    <InputGroup size={this.props.size}>
      		<Input type="text" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} />
      	</InputGroup>
    );
  }
}

export default InputField;
