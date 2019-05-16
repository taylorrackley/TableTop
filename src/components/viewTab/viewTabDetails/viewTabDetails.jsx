import React, { Component } from 'react';
import './viewTabDetails.css';
import ViewTabItems from './viewTabItems/viewTabItems';

class ViewTabDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div id="tabDetailsContainer" className="clearfix">
                <div id="tabDetailsWrapper">
                    <div id="stickToTop">
                        <h2 id="tabDetailsRestaurantName">{this.props.tabDetails.restaurant}</h2>
                        <hr/>
                    </div>
                    <div id="tabDetailsScroll">
                        <ViewTabItems tabDetails={this.props.tabDetails} />
                        <div className="spacerHeavy"></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ViewTabDetails;
