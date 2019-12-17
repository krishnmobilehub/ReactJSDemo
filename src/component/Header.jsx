import React from "react"
import logo from "../assets/image/logo.png"
import { Row, Col } from 'reactstrap'
import backIcon from "../assets/image/left-arrow.png"
import  { Redirect } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.backHandler = this.backHandler.bind(this);
    this.state = {
      toRedirect: ''
    }
  };
  backHandler() {
    this.setState({
      toRedirect: '/'
    });
  }
  renderHeader() {
    if (this.props.page === 'home') {
      return(
        <header className="app-header">
          <Row>
            <Col xs="2">
              <img class="app-logo" src={logo} alt="logo" height="20%"/>
            </Col>
            <Col xs="8">
              <div>{this.props.screen}</div>
            </Col>
          </Row>
        </header>
      )
    } else {
      return(
        <header className="app-header2">
          <Row>
            <Col xs="4">
              <div class="header-button" onClick={this.backHandler}><img src={backIcon} alt="back" height="25px"/><span>zurück</span></div>
            </Col>
            <Col xs="8">
              <div>{this.props.screen}</div>
            </Col>
          </Row>
        </header>
      )
    }
  }
  render() {
    if (this.state.toRedirect !== '') {
      return <Redirect to={this.state.toRedirect} />
    }
    return (
      <div>
        { this.renderHeader()}
      </div>
    );
  }
}

export default Header;
