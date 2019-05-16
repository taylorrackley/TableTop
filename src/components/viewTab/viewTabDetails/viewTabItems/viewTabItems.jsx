import React, { Component } from 'react';
import './viewTabItems.css';

class ViewTabItems extends Component {

    render() {
        return (
            <div>
                <div id="showTabItems">
                {this.props.tabDetails.items.map((item, key) =>
                    <div className="tabItem clearfix" key={key}>
                        <p className="tabItemLeft">{item.name}</p>
                        <p className="tabItemRight">${item.price.toFixed(2)}</p>
                    </div>
                )}
                </div>
                <hr/>
                <div id="tabItemTotal" className="tabItem clearfix">
                    <p className="tabItemLeft">Total: </p>
                    <p className="tabItemRight">${this.props.tabDetails.total.toFixed(2)}</p>
                </div>
                <div id="tabItemTip" className="tabItem clearfix">
                    <p className="tabItemLeft">Quick Gratuity (percentage)</p>
                    <p className="tabItemRight">+ ${this.props.tabDetails.tip.toFixed(2)}</p>
                </div>
            </div>
        );
    }
}

export default ViewTabItems;
