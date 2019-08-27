import React, { Component } from 'react';
import './profileLinks.css';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { userLogout } from '../../../store/actions/authActions';

class UserSignedInProfileLinks extends Component {

    render() {
        if(!this.props.auth.uid) { // When user logs out redirect them
            return( <Redirect to='/login' /> );
        }   

        return (
            <div id="profileLinksContainer">
                <Link to='/'><button className="profileLinksContainerBtn">Open Tab</button></Link>
                <hr/>
                <button className="profileLinksContainerBtn">Recent Meals</button>
                <hr/>
                <button className="profileLinksContainerBtn">Payment Details</button>
                <hr/>
                <button className="profileLinksContainerBtn">Notifications</button>
                <hr/>
                <button className="profileLinksContainerBtn">Preferences</button>
                <hr/>
                <button id="profileLinksLogoutBtn" className="profileLinksContainerBtn" onClick={this.props.userLogout}>Logout</button>
            </div>
        );
    }
}

// TODO Handle logout error
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(userLogout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignedInProfileLinks);
