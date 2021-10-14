import PropTypes from 'prop-types'
import React from 'react'
/**
 * 一个todo项
 * @param {*} param0 
 */
const Todo = ({ onClick, completed, text }) => {
    <li
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