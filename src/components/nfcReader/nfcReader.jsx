import React, { Component } from 'react';
import './nfcReader.css';
import Navbar from '../navbar/navbar'

class NFCReader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    viewTab = () => {
        this.props.viewTab();
    }

    render() {
        return (
            <div id="nfcReaderContainer" className="gradient">
                <Navbar insertedText="" />
                <div id="viewTab">
                    <p>NFC Reader</p>
                    <button onClick={this.viewTab}>View Tab</button>
                </div>
            </div>
        );
    }
}

export default NFCReader;
