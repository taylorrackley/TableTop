import React, { Component } from 'react';
import './viewTabItems.css';

class ViewTabItems extends Component {

    render() {
        if (this.props.tabDetails) {
            return (
                <div>
                    <div id="showTabItems">
                    {this.props.tabDetails.items.map((item, key) =>
                        <div className="tabItem clearfix" key={key}>
                            <p className="tabItemLeft">{item.name}</p>
                            <p className="tabItemRight">${item.price ? item.price.toFixed(2) : ''}</p>
                        </div>
                    )}
                    </div>
                    <hr/>
                    <div id="tabItemTotal" className="tabItem clearfix">
                        <p className="tabItemLeft">Total: </p>
                        <p className="tabItemRight">${this.props.tabDetails.total ? this.props.tabDetails.total.toFixed(2) : ''}</p>
                    </div>
                    <div id="tabItemTip" className="tabItem clearfix">
                        <p className="tabItemLeft">Quick Gratuity {this.props.tip}%</p>
                        <p className="tabItemRight">+ ${this.props.tip ? (this.props.tip/100).toFixed(2) : ''}</p>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default ViewTabItems;
