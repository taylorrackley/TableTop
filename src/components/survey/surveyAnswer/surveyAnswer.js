import React, { Component } from 'react';
import './surveyAnswer.css';
import redCircle from '../../../img/circle_red.png';
import solidRedCircle from '../../../img/solid_circle_red.png';

class SurveyAnswer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
    }

    handleClick = () => {
        this.setState({clicked: true});
        setTimeout(() => {
            this.props.onAnswerSelect(this.props.value)
        }, 250);
    }

    render() {

        let circleIcon = ''
        if (this.state.clicked) {
            circleIcon = <img className="circleIcon" src={solidRedCircle} alt="Solid Red Circle" />
        }
        else {
            circleIcon = <img className="circleIcon" src={redCircle} alt="Red Circle" />
        }

        return (
            <li className="surveyAnswerListItem" value={this.props.value} onClick={this.handleClick}>
                {circleIcon}
                <p className="surveyAnswerText">{this.props.value}</p>
            </li>
        );
    }
}

export default SurveyAnswer;
