/**
  Todo 一个 todo 项
    text: string 显示的文本内容。
    completed: boolean todo 项是否显示删除线。
    onClick() 当 todo 项被点击时调用的回调函数。
*/

import PropTypes from 'prop-types'
import React from 'react'

const Todo = ({ onClick, completed, text }) => {
    return <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo