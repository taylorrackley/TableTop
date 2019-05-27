import React, { Component } from 'react';
import './payTab.css';
import Alert from '../alert/alert';

import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class PayTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToLogin: false,
            redirectToSurvey: false
        };
    }

    alertGoToLogin = () => {
        this.setState({redirectToLogin: true});
    }

    alertGoToSurvey = () => {
        this.setState({redirectToSurvey: true});
    }

    render() {
        if(this.state.redirectToSurvey) {
            return <Redirect to="/tab/survey" />
        }

        if(this.state.redirectToLogin) {
            return <Redirect to="/login" />
        }

        if(!this.props.auth.uid) {
            return <Alert alertText="Oops! You need to sign in to pay your tab. Thanks for using TableTop." nextViewBtnFunc={this.alertGoToLogin} nextViewBtnText="Login" />
        }

        return <Alert alertText="Payment Successful!" nextViewBtnFunc={this.alertGoToSurvey} nextViewBtnText="Take Survey" />;

        // return (
        //     <div className="container gradient">
        //         <div id="payTab">
        //             <Link to='/tab/survey'><button>Pay tab</button></Link>
        //         </div>
        //     </div>
        // );
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
