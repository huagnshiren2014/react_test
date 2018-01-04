import { combineReducers } from 'redux';
// 引入其他规则模块
import userinfo from './userinfo'; 

const rootReducer = combineReducers({
    // 再次添加规则模块
    userinfo
})

export default rootReducer