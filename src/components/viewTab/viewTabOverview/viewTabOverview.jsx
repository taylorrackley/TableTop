import React, { Component } from 'react';
import './viewTabOverview.css';

class ViewTabOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.tabDetails.total, // This should only be used for view of the user. Don't actually use this for payment
            tip: this.props.tabDetails.tip,
            tipPercentage: 20 // Should import default selection from user account
        }
    }

    handleTipChange = (e) => {
        const newPercentage = parseInt(e.target.value, 10);
        const newTip = this.props.tabDetails.subtotal * (newPercentage/100);
        const newTotal = this.props.tabDetails.subtotal + newTip + this.props.tabDetails.tax;
        this.setState({tipPercentage: newPercentage});
        this.setState({tip: newTip});
        this.setState({total: newTotal});
    }

    render() {
        return (
            <div id="payTabOverviewContainer">
                <div id="payTabOverviewGroup">
                    <div className="clearfix">
                        <div className="payTabOverviewLeft">Tab Total:</div>
                        <div className="payTabOverviewRight">${this.props.tabDetails.subtotal.toFixed(2)}</div>
                    </div>
                    <div className="clearfix">
                        <div className="payTabOverviewLeft">
                            <p>Gratuity:</p>
                            <select id="selectedTipPercentage" onChange={this.handleTipChange} value={this.state.tipPercentage}>
                              <option value="0">0%</option>
                              <option value="5">5%</option>
                              <option value="10">10%</option>
                              <option value="15">15%</option>
                              <option value="20">20%</option>
                              <option value="25">25%</option>
                            </select>
                        </div>
                        <div className="payTabOverviewRight">${this.state.tip.toFixed(2)}</div>
                    </div>
                    <div className="clearfix">
                        <div className="payTabOverviewLeft">Tax:</div>
                        <div className="payTabOverviewRight">${this.props.tabDetails.tax.toFixed(2)}</div>
                    </div>
                </div>
                <div id="totalHeader">${this.state.total.toFixed(2)}</div>
            </div>
        );
    }
}

export default ViewTabOverview;
