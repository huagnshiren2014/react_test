import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Detail from '../../page/js/detail';

class list extends Component {
    render() {
        const arr = [1, 2, 3];
        return ( 
        	<ul>
                {arr.map((item, index) => {
                    return <li onClick={this.clickHandle.bind(this, item)} key={item}>这里是第 {item} 项</li>
                })}
            </ul>
        );
    }
    clickHandle(value) {
        this.props.history.push({
            pathname: '/detail/' + value
         });
    }
}

export default withRouter(list);