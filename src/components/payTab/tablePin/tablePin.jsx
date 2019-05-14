import React, { Component } from 'react';
import './tablePin.css';

class TablePin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            validPin: false
        }
    }

    componentDidMount(){
    }

    // Remove pin view component from screen and go onto next screen
    goToCheckDetails = () => {
        if(this.state.validPin) {
            this.props.goToCheckDetails(this.state.pin);
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

    render() {
        return (
            <div id="pin-container">
                <p id="thanks-for-using-tabletop" className="bold">Thanks for using<br/>TableTop</p>
                <p id="enter-pin-txt">Enter the four digit pin on your receipt</p>
                <input id="pin-input" type="text" value={this.state.pin} onChange={this.changePinValue} placeholder="0000" maxLength="4" />
                <div id="view-total-btn" onClick={this.goToCheckDetails} className={"btn " + ''}>View Total</div>
            </div>
        );
    }
}

export default TablePin;
