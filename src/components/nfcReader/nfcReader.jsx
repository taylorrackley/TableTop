import React, { Component } from 'react';
import './nfcReader.css';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';

class NFCReader extends Component {

    render() {
        return (
            <div id="nfcReaderContainer" className="gradient">
                <Navbar insertedText="" />
                <div id="viewTab">
                    <p>NFC Reader</p>
                    <Link to='/tab/view'><button>View Tab</button></Link>
                </div>
            </div>
        );
    }
}

export default NFCReader;
