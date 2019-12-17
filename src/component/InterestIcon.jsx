import React from "react"
import interestActive from '../assets/image/interest-active@2x.png'
import interestDeactive from '../assets/image/interest-deactive@2x.png'

class InterestIcon extends React.Component {  
  renderInterestIcon() {
  	if (this.props.status === 'active') {
  		return(
  			<img src={interestActive} width="25px" alt="interest"/>
  		)
  	} else {
  		return(
  			<img src={interestDeactive} width="25px" alt="interest"/>
  		)
  	}
  }
  render() {
    return (
    	<div className="interest-icon" onClick={this.props.onClick}>
      	{ this.renderInterestIcon() }
      </div>
    );
  }
}

export default InterestIcon;
