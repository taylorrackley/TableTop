import React, { Component } from 'react';
import './tabSurvey.css';
import logo from '../../img/logo_white.png';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Alert from '../alert/alert';
// import SurveyCustomerFeedBack from './surveyCustomerFeedBack/surveyCustomerFeedBack';
import SurveyQuestion from './surveyQuestion/surveyQuestion';
import Navbar from '../navbar/navbar';

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { customerSubmitSurveyWithComments, customerSubmitSurveyWithoutComments } from '../../store/actions/surveyActions';

class TabSurvey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            responses: [],
            customerFeedBack: '',
            redirect: false,
            finishSurvey: false
        };
    }

    onQuestionAnswer = (value) => {
        this.setState({repsonses: this.state.responses.push(value)});
        this.setState((state, props) => ({
            questionNumber: state.questionNumber + 1
        }));
        if (this.props.survey[0].questions.length <= this.state.questionNumber) {
            this.setState({finishSurvey: true});
        }
    }

    closeSurvey = () => {
        this.props.submitSurveyWithoutComments(this.state.repsonses);
        this.setState({redirect: true});
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        else if (this.state.finishSurvey) {
            return <Alert alertText="Thanks for filling out the survey!" nextViewBtnFunc={this.closeSurvey} nextViewBtnText="Finish" />
        }

        let question = '';
        let key = this.state.questionNumber
        if (this.props.survey) {
            question = this.props.survey[0].questions[this.state.questionNumber]; // apply correct question to component
        }

        return (
            <div id="tabSurveyContainer" className="container gradient">
                <Navbar />
                <p id="tabSurveyRestaurantTitle">McDick</p>
                <img id="tabSurveyBackgroundLogo" src={logo} alt="Logo" />
                <TransitionGroup>
                    <CSSTransition
                        key={key}
                        appear={true}
                        timeout={900}
                        classNames="surveyViewSlide"
                    >
                        <SurveyQuestion question={question} onQuestionAnswer={this.onQuestionAnswer} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        survey: state.firestore.ordered.surveys
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitSurveyWithComments: (survey) => dispatch(customerSubmitSurveyWithComments(survey)),
        submitSurveyWithoutComments: (survey) => dispatch(customerSubmitSurveyWithoutComments(survey))
    }
}

// Create Action to Get Survey?
export default compose(
    firestoreConnect([{
        collection: 'surveys',
        where: [
            ['restaurant_id','==','SwkurnZs8i26HrycLjOq'], // TODO change to stored restaurant id var
            ['title','==','default']
        ],
        limit: 1
    }]),
    connect(mapStateToProps, mapDispatchToProps)
)(TabSurvey);
