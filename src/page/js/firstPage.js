import React, { Component } from 'react';
import List from '../../subpage/js/list.js';
import Header from '../../component/js/header.js';



// import '../css/hello.css';

class Hello extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            now: Date.now()
        }
    }
    render() {
        return ( 
                <div className="list">
                    <Header title="列表页Header"/>
                    <p className="lineName1">这里是列表页</p>
                    <p onClick={this.clickHandler.bind(this)}>state测试：{this.state.now}</p>
                    <hr/>
                    <List />
                </div>
        	
        );
    }
    componentDidMount() {
        console.log('组件加载完成');
    }
    componentDidUpdate() {
        console.log('数据更新了');
    }
    clickHandler(e){
        this.setState({
            now: Date.now()
        })
    }
}

export default Hello;