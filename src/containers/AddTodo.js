import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../models/todolist/actions";

let AddToDo = ({dispatch}) => {
    let input
    return (
        <div>
            <form
                onSubmit={e =>{
                    e.preventDefault()
                    if(!input.value.trim()){
                        return
                    }
                    dispatch(addTodo(input.value))
                }}
            >
                <input ref={node => {
                    input = node
                }}/>   
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

AddToDo = connect()(AddToDo)

export default AddToDo