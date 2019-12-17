import React from "react"
import statusTodo from '../assets/image/job-status-todo.png'
import statusPending from '../assets/image/job-status-pending.png'
import statusConfirmed from '../assets/image/job-status-confirmed.png'

class JobStatusIcon extends React.Component {  
  renderJobStatusIcon() {
    let jobStatusIcon;
  	if (this.props.status === 'todo') {
		  jobStatusIcon = statusTodo;
  	} else if (this.props.status === 'pending') {
      jobStatusIcon = statusPending;
    } else {
  		jobStatusIcon = statusConfirmed;
  	}
    return(
        <img id={this.props.id} src={jobStatusIcon} width="35px" alt="job-status"/>
    )
  }
  render() {
    return (
    	<div className="job-status-icon" onClick={this.props.onClick}>
      	{ this.renderJobStatusIcon() }
      </div>
    );
  }
}

export default JobStatusIcon;
