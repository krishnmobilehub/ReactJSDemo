import React from 'react'
import '../assets/css/app.css'
import Header from "../component/Header"
import DetailCardView from "../component/DetailCardView"
import DateIcon from "../component/DateIcon"
import Button from "../component/Button"
import InterestIcon from "../component/InterestIcon"
import ChatIcon from "../component/ChatIcon"
import LocationIcon from "../component/LocationIcon"
import detailImage from '../assets/image/detail.png'
import detailBase from '../assets/image/detail-base.png'
import collapseLeftIcon from '../assets/image/collapse-left@2x.png'
import collapseTopIcon from '../assets/image/collapse-top@2x.png'
import { Collapse, CardText, Row, Col } from 'reactstrap'

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDescriptionBar = this.toggleDescriptionBar.bind(this);
    this.toggleInterest = this.toggleInterest.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      collapsed: true,
      descriptionBtn: collapseLeftIcon,
      interest: "active"
    };
  }

  clickHandler(e) {
    alert('Clicked : ' + e.target.id)
  }

  toggleDescriptionBar() {
    let icon;
    if (this.state.collapsed) {
      icon = collapseTopIcon
    } else {
      icon = collapseLeftIcon
    }
    this.setState({
      collapsed: !this.state.collapsed,
      descriptionBtn: icon
    });
  }

  toggleInterest() {
    var interestStatus;
    if (this.state.interest === 'active') {
      interestStatus = "deactive"
    } else {
      interestStatus = "active"
    }
    this.setState({
      interest: interestStatus
    });
  }

  render() {
    var divStyle = {
      backgroundImage: 'url(' + detailImage + ')',
    };
    var divStyleBase = {
      backgroundImage: 'url(' + detailBase + ')',
    };
    return (
      <div className="app">
        <Header page="detail" screen="Anfragen" />
        <div className="rowclass" style={divStyle}>
          <div className="detail-base" style={divStyleBase}>
            <Row>
               <Col xs="9" sm="9" md="9">
                 <div className="detail-view-info">
                    <div className="detail-title">Berliner Grune Woche</div>
                    <div className="detail-date"><DateIcon /> Mo, 10.03 - Fri, 21.03</div>
                    <div className="location-detail"><LocationIcon />Berlin</div>
                 </div>
               </Col>
               <Col xs="3" sm="3" md="3">
                    <InterestIcon status={this.state.interest} onClick={this.toggleInterest}/>
               </Col>
            </Row>
            <Row>
               <Col xs="9">
                   <div className="detail-subtitle">Berliner Grune Woche</div>
                   <div className="-detail-description">Schulung notwendig</div>
               </Col>
               <Col xs="3">
                    <ChatIcon onClick={this.clickHandler} id="Chat"/>
               </Col>
            </Row>
          </div>
        </div>
         <Row>
         <Col xs="12">
              <CardText className="description-block">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                <br />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                    <div class="description-info row">
                      <Col xs="6">
                       <span class="title"> Kunde </span>
                       <span class="subtitle"> Mostra S.A </span>
                      </Col>
                       <Col xs="6">
                       <span class="title"> Projekt Manager </span>
                       <span class="subtitle"> Bianca W.  </span>
                      </Col>
                    </div>
                  </CardText>
                </Collapse>
                <span onClick={this.toggleDescriptionBar}>Alais geldt <img src={this.state.descriptionBtn} width="25px" alt="collapse"/></span>
              </CardText>
         </Col>
         </Row>

        <DetailCardView
            text="Berliner Grune Woche"
            date="Mo, 01.03 - Fr, 21.03"
            location="Berlin"
            jobtag1="Ho"
            jobtag2="Pr"
            jobtag3="Sp"
            totalBookable="111"
            euro="384"
            onClick={this.clickHandler}
            />

        <DetailCardView
            text="Berliner Grune Woche"
            date="Mo, 01.03 - Fr, 21.03"
            location="Berlin"
            jobtag1="Ho"
            jobtag2="Pr"
            jobtag3="Sp"
            totalBookable="111"
            euro="384"
            onClick={this.clickHandler}
            />

        <DetailCardView
            text="Berliner Grune Woche"
            date="Mo, 01.03 - Fr, 21.03"
            location="Berlin"
            jobtag1="Ho"
            jobtag2="Pr"
            jobtag3="Sp"
            totalBookable="11"
            euro="384"
            onClick={this.clickHandler}
            />

        <DetailCardView
            text="Berliner Grune Woche"
            date="Mo, 01.03 - Fr, 21.03"
            location="Berlin"
            jobtag1="Ho"
            jobtag2="Pr"
            jobtag3="Sp"
            totalBookable="11"
            euro="384"
            onClick={this.clickHandler}
            />

        <DetailCardView
            text="Berliner Grune Woche"
            date="Mo, 01.03 - Fr, 21.03"
            location="Berlin"
            jobtag1="Ho"
            jobtag2="Pr"
            jobtag3="Sp"
            totalBookable="11"
            euro="384"
            onClick={this.clickHandler}
            />

        <DetailCardView
            text="Berliner Grune Woche"
            date="Mo, 01.03 - Fr, 21.03"
            location="Berlin"
            jobtag1="Ho"
            jobtag2="Pr"
            jobtag3="Sp"
            totalBookable="11"
            euro="384"
            onClick={this.clickHandler}
            />

        <DetailCardView
            text="Berliner Grune Woche"
            date="Mo, 01.03 - Fr, 21.03"
            location="Berlin"
            jobtag1="Ho"
            jobtag2="Pr"
            jobtag3="Sp"
            totalBookable="11"
            euro="384"
            onClick={this.clickHandler}
            />

        <DetailCardView
            text="Berliner Grune Woche"
            date="Mo, 01.03 - Fr, 21.03"
            location="Berlin"
            jobtag1="Ho"
            jobtag2="Pr"
            jobtag3="Sp"
            totalBookable="11"
            euro="384"
            onClick={this.clickHandler}
            />

        <br /><br /><br />
        <Row className="bottom-btn">
          <Col xs="6"><Button color="bg-red" name="Anfragen Ablehnen" id="Anfragen Ablehnen" onClick={this.clickHandler} /></Col>
          <Col xs="6"><Button color="bg-blue" name="Anfragen Ablehnen" id="Anfragen Ablehnen" onClick={this.clickHandler} /></Col>
        </Row>

      </div>
    );
  }
}

export default HomeView;
