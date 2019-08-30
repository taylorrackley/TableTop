import React, { Component } from 'react';
import './load.css';
import loadingIcon from '../../img/loadingIcon.gif';

class Load extends Component {

    render() {
        return (
            <div className="container">
                <img id="loadIcon" src={loadingIcon} alt="Loading Icon" />
            </div>
        );
    }
}

export default Load;
