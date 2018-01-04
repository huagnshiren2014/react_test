import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userinfoActions from '../../actions/userinfo'

import A from '../../component/js/A';
import B from '../../component/js/B';
import C from '../../component/js/C';

class Home extends Component{
    render() {
        return (
            <div>
                <header>
                    <h3>这里是首页---router测试</h3>
                </header>
                <section>
                    <p><Link to="/hello">hello</Link></p>
                    <p><Link to="/firstpage">firstPage</Link></p>
                </section>
                <div>
                    <p>hello world</p>
                    <hr/>
                    <A userinfo={this.props.userinfo}/>
                    <hr/>
                    <B userinfo={this.props.userinfo}/>
                    <hr/>
                    <C actions={this.props.userinfoActions}/>
                </div>
            </div>
        );
    }
    // 生命周期函数: 组件加载完成
    componentDidMount() {
        // 向action中的login推送数据，触发改变
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
} 
function mapStateToProps(state) { // 获取userinfo数据
    return { 
        userinfo: state.userinfo  // 从reducers的index.js获取
    } 
} 
function mapDispatchToProps(dispatch) { // 触发数据更新
    return { 
        userinfoActions: bindActionCreators(userinfoActions, dispatch) //userinfoActions获取的action的集合， dispatch触发模式，
    } 
}
export default connect( 
    mapStateToProps, // 获取userinfo数据
    mapDispatchToProps // 获取userinfo数据
)(Home);