import React, { Component } from 'react';
import './tabSurvey.css';
import logo from '../../img/logo_white.png';

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
        if(this.props.survey) {
            if(this.props.survey[0].questions.length > this.state.questionNumber) { // Cycle through questions
                question = this.props.survey[0].questions[this.state.questionNumber];
            } else { // Complete survey
                if(this.props.survey[0].get_customer_input && !this.state.customerFeedBack) {
                    return (
                        <div className="container gradient">
                            <Navbar />
                            <p id="tabSurveyRestaurantTitle">Lorem Tavern</p>
                            <img id="tabSurveyBackgroundLogo" src={logo} alt="Logo" />
                            <SurveyCustomerFeedBack onCustomerFeedBack={this.onCustomerFeedBack} />
                        </div>
                    );
                } else {
                    return <Alert alertText="Thanks for filling out the survey!" nextViewBtnFunc={this.finishSurvey} nextViewBtnText="Finish" />
                }
            }
        }

        return (
            <div className="container gradient">
                <Navbar />
                <p id="tabSurveyRestaurantTitle">Lorem Tavern</p>
                <img id="tabSurveyBackgroundLogo" src={logo} alt="Logo" />
                <SurveyQuestion question={question} onQuestionAnswer={this.onQuestionAnswer} />
            </div>
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
