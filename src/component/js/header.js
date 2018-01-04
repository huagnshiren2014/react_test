import React, { Component } from 'react';
// import './hello.css';

class header extends Component {
    render() {
        return ( 
        	<div>
                <p style={{textAlign: 'center', backgroundColor: '#000', color: '#fff', fontSize: '32px'}}>{this.props.title}</p>
            </div>
        );
    }
}

export default header;