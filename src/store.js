import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../src/models/index"

const initState = {}

const composeWare = compose(
    applyMiddleware(thunkMiddleware)
    // ...others
)

/**
 * applyMiddleware(...middlewares) 使用包含自定义功能的 middleware 来扩展 Redux 是一种推荐的方式。
 */

/**
 * 使用 Thunk Middleware 来做异步 Action
 */

/**
 * compose(...functions) 组合多个函数
 */


const store = createStore(
    reducers,
    initState,
    composeWare
);
/**
 * createStore(reducer, [preloadedState], enhancer)
 * reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
 * [preloadedState] (any): 初始时的 state
 * enhancer (Function): Store enhancer 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口
 */

export default store;