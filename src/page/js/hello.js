import React, { Component } from 'react';
import TopBox from '../../subpage/js/topBox';
import MiddleBox from '../../subpage/js/middleBox';
import BottomBox from '../../subpage/js/bottomBox';
import Header from '../../component/js/header.js'
import '../css/hello.css';

class Hello extends Component {
    render() {
        return ( 
        	<div className="Hello">
                <Header />
                <p className="lineName1">我的中国心</p>
                <hr/>
                <p className="lineName2">我是董继仁</p>
                <hr/>
                <TopBox />
                <MiddleBox />
                <BottomBox />
            </div>
        );
    }
    clickHandler(e){
        console.log(Date.now());
    }
}

export default Hello;