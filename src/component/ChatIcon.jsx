import React from "react"
import chatIcon from '../assets/image/chat@2x.png'

class ChatIcon extends React.Component {  
  render() {
    return (
      <div className="chat-icon" id={this.props.id} onClick={this.props.onClick}>
      	<img id={this.props.id} src={chatIcon} width="25px" alt="chat" />
      </div>
    );
  }
}

export default ChatIcon;
