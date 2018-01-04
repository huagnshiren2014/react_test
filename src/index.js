import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import remx from 'adaptive.js';

import configureStore from './store/configureStore';

import RouteMap from './router/routers';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

// 设计图宽度
remx.desinWidth = 750;
// body 字体大小 会将body字体大小设置为 baseFont / 100 + 'rem'  750的设计图一般设置为28,640的设计图一般设置为24
remx.baseFont = 28;

// 显示最大宽度 可选
remx.maxWidth = 750;
// rem值改变后执行方法 可选
// window['adaptive'].setRemCallback = function () {
//     alert(1)
// }
// scaleType 1:iphone andriod下viewport均无缩放 2:iphone下viewport有缩放,andriod没有 3:iphone andriod下viewport均有缩放; 默认值为1
remx.scaleType = 1;
// 初始化
remx.init();

render( <Provider store = { store } > 
            <RouteMap />
        </Provider>, document.getElementById('root'));
registerServiceWorker();