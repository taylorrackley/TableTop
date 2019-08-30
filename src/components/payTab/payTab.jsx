import React, { Component } from 'react';
import './payTab.css';
import Alert from '../alert/alert';
import loadingIcon from '../../img/loadingIcon.gif';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class PayTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToLogin: false,
            redirectToSurvey: false,
            displayLoad: true
        };
    }

    alertGoToLogin = () => {
        this.setState({redirectToLogin: true});
    }

    alertGoToSurvey = () => {
        this.setState({redirectToSurvey: true});
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({displayLoad: false});
        }, 2500);
    }

    render() {

        if (this.state.displayLoad) {
            return (
                <div className="container">
                    <img id="loadIcon" src={loadingIcon} alt="Loading Icon" />
                </div>
            );
        }

        if (this.state.redirectToSurvey) {
            return <Redirect to="/tab/survey" />
        }

        if (this.state.redirectToLogin) {
            return <Redirect to="/login" />
        }

        if(!this.props.auth.uid) {
            return <Alert alertText="Oops! You need to sign in to pay your tab. Thanks for using TableTop." nextViewBtnFunc={this.alertGoToLogin} nextViewBtnText="Login" />
        }

        return <Alert alertText="Payment Successful!" nextViewBtnFunc={this.alertGoToSurvey} nextViewBtnText="Take Survey" />;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userLogout: () => dispatch(userLogout())
//     };
// }

export default connect(mapStateToProps)(PayTab);
