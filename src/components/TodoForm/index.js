import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ListContext } from '../../context/ListContext'

const Input = styled.input`
  width: 100%;
  height: 34px;
  margin-top: 1rem;
`


function TodoInput() {
  const [ todoValue, setTodoValue ] = useState('')
  const [todos, setTodos] = useContext(ListContext)
  
  function addTodo(e) {
    if (e.key === 'Enter') {
      const newTodos = [...todos, todoValue]
      localStorage.setItem('todoList', JSON.stringify(newTodos))
      setTodos(newTodos)
      setTodoValue('')
    }
  }
  
  return (
    <>
    <Input 
        type = 'text'
        id = 'newTask'
        value = { todoValue }
        name = 'newTask'
        placeholder = 'New Task'
        onKeyDown = { addTodo }
        onChange = {(e) => setTodoValue(e.target.value) }
      />
    </>
  )
}

export default TodoInput;