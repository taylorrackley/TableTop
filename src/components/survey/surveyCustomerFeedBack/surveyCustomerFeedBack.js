import React, { Component } from 'react';
import './surveyCustomerFeedBack.css';

class SurveyCustomerFeedBack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        };
    }

    handleChange = (e) => {
        this.setState({comments: e.target.value});
    }

    onComplete = () => {
        if(this.state.comments) {
            this.props.onCustomerFeedBack(this.state.comments);
        } else {
            this.props.onCustomerFeedBack('NA');
        }
    }

    render() {
        return (
            <div id="surveyCustomerFeedBackWrapper">
                <p id="surveyCustomerFeedBackHeader">Thank you for your feedback!</p>
                <p id="surveyCustomerFeedbackPrompt">Additional Comments:</p>
                <textarea id="surveyCustomerFeedBackInput" value={this.state.comments} onChange={this.handleChange}></textarea>
                <button id="surveyCustomerFeedBackBtn" className="btn" onClick={this.onComplete}>Finished</button>
            </div>  
        );
    }
}

export default SurveyCustomerFeedBack;
