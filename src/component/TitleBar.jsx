import React from "react"

class TitleBar extends React.Component {  
  render() {
    return (
       <div className="app-titlebar">{this.props.title}</div>
    );
  }
}

export default TitleBar;
