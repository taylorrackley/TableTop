import React, { Component } from 'react';
import './viewTabNextViewBtn.css';

class ViewTabNextViewBtn extends Component {

    render() {
        return (
            <div id="payTabNextViewContainer" className="gradientDark">
                <div id="payTabNextViewBtn" onClick={this.goToPayNow}>Pay Now</div>
            </div>
        );
    }
}

export default ViewTabNextViewBtn;
