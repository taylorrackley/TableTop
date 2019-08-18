import React, { Component } from 'react';
import './tablePin.css';

import Navbar from '../../navbar/navbar';

import { Redirect } from 'react-router-dom'

class TablePin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            validPin: false,
            redirect: false
        }
    }

    changePinValue = (e) => {
        const pattern = /^[0-9\b]+$/;
        if (e.target.value === '' || pattern.test(e.target.value)) { // Make sure pin contains digits only
           this.setState({pin: e.target.value});
           if(e.target.value.length === 4) {
                this.setState({validPin: true});
           } else {
               this.setState({validPin: false});
           }
        }
    }

    goToTab = () => {
        if(this.state.validPin) {
            this.setState({redirect: true});
        }
    }

    render() {

        if(this.state.redirect) {
            console.log('Redirect to Tab');
            return (<Redirect to={{ pathname: "/tab/view", state: { pin: this.state.pin } }} />);
        }

        return (
            <div className="container">
                <Navbar />
                <div id="pinWrapper" className="gradient">
                    <p id="pinHeader">Thanks for using<br/>TableTop</p>
                    <p id="enterPinTxt">Enter the four digit pin on your receipt</p>
                    <input id="pinInput" type="text" value={this.state.pin} onChange={this.changePinValue} placeholder="0000" maxLength="4" />
                    <div className="btn" onClick={this.goToTab}>View Tab</div>
                </div>
            </div>
        );
    }
}

export default TablePin;