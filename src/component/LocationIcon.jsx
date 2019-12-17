import React from "react"
import locationIcon from '../assets/image/location@2x.png'

class LocationIcon extends React.Component {  
  render() {
    return (
      <span><img src={locationIcon} width="10px" alt="location"/></span>
    );
  }
}

export default LocationIcon;
