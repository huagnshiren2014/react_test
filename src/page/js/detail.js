import React, { Component } from 'react';
import Header from '../../component/js/header.js'

class Detail extends Component {
    render() {
        return ( 
        	<div className="Hello">
                <Header />
                <p className="lineName1">订单详情</p>
                <hr/>
                <p className="lineName2">id:{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Detail;