import React, { Component } from 'react';
import './surveyQuestion.css';
import SurveyAnswer from '../surveyAnswer/surveyAnswer';

class SurveyQuestion extends Component {

    onAnswerSelect = (value) => {
        this.props.onQuestionAnswer(value);
    }

    render() {
        return (
            <div id="surveyQuestionWrapper">
                <span id="surveyQuestion">{this.props.question}:</span>
                <ul id="surveyAnswerList">
                    <SurveyAnswer
                        value="Execellent"
                        onAnswerSelect={this.onAnswerSelect}
                    />
                    <SurveyAnswer
                        value="Good"
                        onAnswerSelect={this.onAnswerSelect}
                    />
                    <SurveyAnswer
                        value="Fair"
                        onAnswerSelect={this.onAnswerSelect}
                    />
                    <SurveyAnswer
                        value="Poor"
                        onAnswerSelect={this.onAnswerSelect}
                    />
                    <SurveyAnswer
                        value="Very Poor"
                        onAnswerSelect={this.onAnswerSelect}
                    />
                </ul> 
            </div>  
        );
    }
}

export default SurveyQuestion;
