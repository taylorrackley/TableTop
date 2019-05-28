import React, { Component } from 'react';
import './tabSurvey.css';
import logo from '../../img/logo_white.png';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Alert from '../alert/alert';
import SurveyCustomerFeedBack from './surveyCustomerFeedBack/surveyCustomerFeedBack';
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
            redirect: false
        };
    }

    onQuestionAnswer = (e) => {
        this.setState({repsonses: this.state.responses.push(e.currentTarget.getAttribute('value'))});
        this.setState({questionNumber: this.state.questionNumber+1});
        console.log(this.state);
    }

    onCustomerFeedBack = (comments) => {
        this.setState({customerFeedBack: comments});
    }

    finishSurvey = () => {
        if(this.state.customerFeedBack) {
            this.props.submitSurveyWithComments({
                responses: this.state.responses,
                comments: this.state.customerFeedBack });
        } else {
            this.props.submitSurveyWithoutComments(this.state.repsonses);
        }
        this.setState({redirect: true});
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }

        let question = '';
        let surveyView = <SurveyQuestion question={question} onQuestionAnswer={this.onQuestionAnswer} />;;

        if(this.props.survey) {
            if(this.props.survey[0].questions.length > this.state.questionNumber) { // Cycle through questions
                question = this.props.survey[0].questions[this.state.questionNumber]; // apply correct question to component
                surveyView = <SurveyQuestion question={question} onQuestionAnswer={this.onQuestionAnswer} />;
            } else if (this.props.survey[0].get_customer_input && !this.state.customerFeedBack) { // Get customer comments if applicable
                surveyView = <SurveyCustomerFeedBack onCustomerFeedBack={this.onCustomerFeedBack} />;
            } else { // Complete survey
                return <Alert alertText="Thanks for filling out the survey!" nextViewBtnFunc={this.finishSurvey} nextViewBtnText="Finish" />
            }
        }

        return (
            <div id="tabSurveyContainer" className="container gradient">
                <Navbar />
                <p id="tabSurveyRestaurantTitle">McDick</p>
                <img id="tabSurveyBackgroundLogo" src={logo} alt="Logo" />
                <TransitionGroup>
                    <CSSTransition
                        key={question}
                        appear={true}
                        timeout={900}
                        classNames="surveyViewSlide"
                    >
                        <SurveyQuestion question={question} onQuestionAnswer={this.onQuestionAnswer} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
            // <div className="container gradient">
            //     <Navbar />
            //     <p id="tabSurveyRestaurantTitle">McDick</p>
            //     <img id="tabSurveyBackgroundLogo" src={logo} alt="Logo" />
            //     <CSSTransition
            //         in={true}
            //         appear={true}
            //         timeout={10000}
            //         classNames="surveyViewSlide"
            //     >
            //         {surveyView}
            //     </CSSTransition>
            // </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
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
