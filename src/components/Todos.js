import React from 'react'
import  PropTypes from 'prop-types';
import Todo from './Todo';
const Todos = (props) => {
    console.warn(props)
    return (
        <div className='container'>
            <h3>Todos list</h3>
            <Todo todo={props.todos[0]}/>
        </div>
    )
}

Todos.propTypes = {
  todos: PropTypes.any
}
export default Todos;