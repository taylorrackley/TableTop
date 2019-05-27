import React, { Component } from 'react';
import './alert.css';
import logo from '../../img/logo_white.png';

class Alert extends Component {

    render() {
        return (
            <div className="container">
                <div id="alertWrapper" className="gradient">
                    <img id="alertLogo" src={logo} alt="Logo" />
                    <p id="alertText">{this.props.alertText}</p>
                    <div id="alertGoToNextViewBtn" onClick={this.props.nextViewBtnFunc} className="btn">{this.props.nextViewBtnText}</div>
                </div>
            </div>
        );
    }
}

export default Alert;
