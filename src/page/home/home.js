import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './home.less';

class Home extends Component{
    render() {
        return (
            <div className="home">
                <header className="header_txt">
                    <h3>首页</h3>
                </header>
                <section className="function_box">
                    <p className="flight" onClick={this.gotoFlight.bind(this)}><span>机票</span></p>
                    <p className="house" onClick={this.gotoHouse.bind(this)}><span>租房</span></p>
                    <p className="pickup" onClick={this.gotoPickup.bind(this)}><span>接送机</span></p>
                    <p className="sellhouse" onClick={this.gotoBuyhouse.bind(this)}><span>买房</span></p>
                </section>
            </div>
        );
    }
    gotoBuyhouse(e) {
        this.props.history.push({pathname: '/buyhouse/index'});
    }
    gotoFlight(e) {
         // this.dialogData.notice = true;
        // this.dialogData.noticeTxt = '该业务暂不开放';
        console.log('该业务暂不开放');
    }
    gotoHouse(e) {
        this.props.history.push({pathname: '/house/index'});
    }
    gotoPickup(e) {
        if (this.from === 'uhouzzapp') {
            this.props.history.push({pathname: '/pickup/index?from=uhouzzapp'});
        } else {
            this.props.history.push({pathname: '/pickup/index'});
        }
    }
}
export default withRouter(Home);