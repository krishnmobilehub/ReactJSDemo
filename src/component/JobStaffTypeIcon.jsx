import React from "react"

class JobStaffType extends React.Component {  
  render() {
    return (
      <span class={this.props.type} onClick={this.props.onClick}>{this.props.typeTitle}</span>
    );
  }
}

export default JobStaffType;
