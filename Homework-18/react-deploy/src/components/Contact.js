import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
 
    render() {
        return (
            <div className="Contact-container">
                <p>{this.props.firstName} </p>
                <p>{this.props.lastName} </p>
                <p>{this.props.phone} </p>
                <p>{this.props.gender} </p>
            </div>
        )
    }
}

export default Contact;