import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './notFound.less'

class NotFound extends Component {
    render() {
        return ( 
        	<div className="notFound">
                <div className="pic">
                    <img src="https://p0.ifengimg.com/ifengimcp/pic/20161214/5c50117f02fede22140f_size31_w750_h368.png" alt=""/>
                </div>
                <div class="words">
                    <h1>对不起</h1>
                    <h1>您访问的页面弄丢了</h1>
                </div>
                <div className="return">
                    <Link to="/" className="button">返回首页</Link>
                </div>
            </div>
        );
    }
}

export default NotFound;