import React, { Component } from 'react';
import './payTab.css';
import { Redirect } from 'react-router-dom';

class PayTab extends Component {

    render() {
        if(false) {
            return <Redirect push to='/profile/login' />;
        }

        return (
            <div className="container">
                Pay Tab View
            </div>
        );
    }
}

export default PayTab;
