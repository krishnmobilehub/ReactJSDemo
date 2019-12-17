import React from "react"
import bookableIcon from '../assets/image/bookable@2x.png'

class BookableIcon extends React.Component {  
  render() {
    return (
      <span class="bookable-base-block"><img src={bookableIcon} alt="total-bookable" /><span>{this.props.total}</span></span>
    );
  }
}

export default BookableIcon;
