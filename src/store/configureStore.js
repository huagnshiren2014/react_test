import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer, 
        initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    ) // window.devToolsExtension ? window.devToolsExtension() : undefined 是为了触发chrome 扩展程序 redux-devtools
    return store
};