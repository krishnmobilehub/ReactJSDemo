import React from 'react'
import jobThumbIcon from '../assets/image/logo.png'
import Button from "../component/Button"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap'
import JobStaffTypeIcon from "../component/JobStaffTypeIcon"
import DateIcon from "../component/DateIcon"
import BookableIcon from "../component/BookableIcon"
import LocationIcon from "../component/LocationIcon"
import  { Redirect } from 'react-router-dom'

class HomeCardView extends React.Component {
  constructor(props) {
    super(props);
    this.detailHandler = this.detailHandler.bind(this);
    this.componentHandler = this.componentHandler.bind(this);
    this.state = {
      toRedirect: ''
    }
  }
  detailHandler() {
    this.setState({
      toRedirect: '/detail'
    });
  }
  componentHandler() {
    this.setState({
      toRedirect: '/component'
    });
  }
  render() {
    if (this.state.toRedirect !== '') {
      return <Redirect to={this.state.toRedirect} />
    }
    return (
        <Card>
          <Row>
            <Col xs="7" sm="7" md="8">
              <CardBody>
                <CardTitle>{this.props.text}</CardTitle>
                <CardSubtitle>
                  <DateIcon />{this.props.date}
                </CardSubtitle>

                <subtext class="sub-title">
                  <LocationIcon />{this.props.location}
                </subtext>

                <div class="row">
                  <div class="col-9 p0 col-sm-9 col-md-9">
                    <JobStaffTypeIcon type="job" typeTitle={this.props.jobtag1} />
                    <JobStaffTypeIcon type="job" typeTitle={this.props.jobtag2} />
                    <JobStaffTypeIcon type="job" typeTitle={this.props.jobtag3} />
                  </div>
                  <div class="col-3 p0 col-sm-3 col-md-3">
                    <BookableIcon total={this.props.totalBookable} />
                  </div>
                </div>

                <subtext class="subtext-block">{this.props.subtext}</subtext>
              </CardBody>
            </Col>
            <Col xs="5" sm="5" md="4">
              <CardBody>
               <CardImg width="100%" src={jobThumbIcon} alt="Card image cap" />
               <CardText>bis <span>{this.props.euro}&euro;</span><br /><span class="subtext">{this.props.euro}&euro;/h</span></CardText>
              </CardBody>
            </Col>
          </Row>

          <Row>
              <Col xs="6"><Button color="red" name="ABLEHENEN" onClick={this.componentHandler} /></Col>
              <Col xs="6"><Button color="blue" name="ANSCHAUEN" onClick={this.detailHandler} /></Col>
          </Row>
        </Card>
    );
  }
}

export default HomeCardView;
