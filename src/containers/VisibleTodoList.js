/**
 * VisibleTodoList 的容器来监听 Redux store 变化并处理如何过滤出要显示的数据。为了实现状态过滤，需要实现 FilterLink 的容器组件来渲染 Link 并在点击时触发对应的 action：
    VisibleTodoList 根据当前显示的状态来对 todo 列表进行过滤，并渲染 TodoList。
 * 
 */

import { connect } from "react-redux";
import TodoList from './../components/TodoList';
import { toggleTodo } from "../models/todolist/actions";


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList