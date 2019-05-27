import React, { Component } from 'react';
import './surveyQuestion.css';
import redCircle from '../../../img/circle_red.png';

class SurveyQuestion extends Component {

    render() {
        return (
            <div id="surveyQuestionWrapper">
                <p id="surveyQuestion">{this.props.question}:</p>
                <ul id="surveyAnswerList">
                    <li value="Execellent" onClick={this.props.onQuestionAnswer}>
                        <img className="circleIcon" src={redCircle} alt="Red Circle" />
                        <p className="surveyAnswerText">Excellent</p>
                    </li>
                    <li value="Good" onClick={this.props.onQuestionAnswer}>
                        <img className="circleIcon" src={redCircle} alt="Red Circle" />
                        <p className="surveyAnswerText">Good</p>
                    </li>
                    <li value="Fair" onClick={this.props.onQuestionAnswer}>
                        <img className="circleIcon" src={redCircle} alt="Red Circle" />
                        <p className="surveyAnswerText">Fair</p>
                    </li>
                    <li value="Poor" onClick={this.props.onQuestionAnswer}>
                        <img className="circleIcon" src={redCircle} alt="Red Circle" />
                        <p className="surveyAnswerText">Poor</p>
                    </li>
                    <li value="Very Poor" onClick={this.props.onQuestionAnswer}>
                        <img className="circleIcon" src={redCircle} alt="Red Circle" />
                        <p className="surveyAnswerText">Very Poor</p>
                    </li>
                </ul> 
            </div>  
        );
    }
}

export default SurveyQuestion;
