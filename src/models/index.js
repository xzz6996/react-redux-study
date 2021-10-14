import { combineReducers } from "redux"
import users from './user'
import todos from './todolist/reducers/todos'
import visibilityFilter from "./todolist/reducers/visibilityFiter"

export default combineReducers({
    users,
    todos,
    visibilityFilter
})

/**
 * combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore 方法。
 *
 */

