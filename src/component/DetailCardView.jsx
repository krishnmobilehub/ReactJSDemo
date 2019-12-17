import React from 'react'
import JobStaffTypeIcon from "../component/JobStaffTypeIcon"
import DateIcon from "../component/DateIcon"
import BookableIcon from "../component/BookableIcon"
import LocationIcon from "../component/LocationIcon"
import JobStatusIcon from "../component/JobStatusIcon"
import collapseRightIcon from '../assets/image/collapse-right@2px.png'
import { Card, Row, Col } from 'reactstrap'

class DetailCardView extends React.Component {  
  render() {
    return (
        <Card>
          <Row>
            <Col xs="12">
              <div class="detail-card-info">
               <BookableIcon total={this.props.totalBookable} />
               <span class="detail-card-view-title">Berliner Grune Woche</span>
              </div>
              <div class="detail-id">ID.1231.3</div>
              </Col>
              <Col xs="12" sm="12" md="12">
                <div class="card-subtitle">
                  <DateIcon /><span class="detail-card-date">{this.props.date}</span><span class="detail-time">Jeweils 8:00 - 10:00 Uhr</span>
                </div>
              </Col>
              <Col xs="12" sm="12" md="12">
                <subtext class="sub-title">
                  <LocationIcon />{this.props.location}
                </subtext>
                <div class="row">
                  <div class="col-9 p0 col-sm-9 col-md-9">
                    <JobStaffTypeIcon type="staff" typeTitle={this.props.jobtag1} />
                    <JobStaffTypeIcon type="staff" typeTitle={this.props.jobtag2} />
                    <JobStaffTypeIcon type="staff" typeTitle={this.props.jobtag3} />
                  </div>
                  <div class="col-3 p0 col-sm-3 col-md-3">
                  <div class="detail-price">bis<span>{this.props.euro}&euro;</span><br /><span class="subtext">{this.props.euro}&euro;/h</span></div>
                  </div>
                </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <div class="job-card-row">
                <div class="collapse-right">
                  <img src={collapseRightIcon} width="30px" alt="CollapseRight" id="mehr anzeigen" onClick={this.props.onClick} />
                  <span>mehr anzeigen</span>
                </div>
                <div class="job-status-block">
                  <JobStatusIcon status="todo" id="todo" onClick={this.props.onClick}/>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
    );
  }
};

export default DetailCardView;
