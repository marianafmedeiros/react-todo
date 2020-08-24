import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components'
import { ListContext } from '../../context/ListContext'


const TodoWrapper = styled.div `
  display: flex;
  align-items: center;
  margin: 1rem 0;
`

const TodoValue = styled.input `
  border: none;
  background: transparent;
  color: #AEDAFF;
  font-size: 1.4rem;
  outline: none;
  width: 100%;

  
  ${
    ({ isComplete }) => isComplete && css `
      text-decoration: line-through;
    `
  }
`

const Checkbox = styled.div `
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .2s ease-in-out;
  border: 1px solid #fff;

  &:hover {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0)
  }

   
  ${
    ({ isComplete }) => isComplete && css `
      color: #000;
      background: #fff
    `
  }
`

function TodoTask ({ task, index }) {
  const [isComplete, setIsComplete] = useState(false)
  const [todos, setTodos] = useContext(ListContext)
  
  function updateTodo (e, index) {
    const updatedTodos = [...todos]
    updatedTodos[index] = e.target.value
    localStorage.setItem('todoList', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }
  
  function handleKeyDown(e, index) {
    if (e.key === 'Backspace' && task === '') {
      e.preventDefault()
      deleteTodo(index)
    }
  }
  
  function deleteTodo (i) {
    const updatedTodos = todos.filter((_, idx) => idx !== i)
    localStorage.setItem('todoList', JSON.stringify(updatedTodos))
    setTodos(updatedTodos);
  }

  
  return (
    <TodoWrapper>
      <Checkbox isComplete = { isComplete }
        onClick = {() => {
          setIsComplete(!isComplete)
        }}
      />
      <TodoValue 
        value = {task} 
        type = 'text'
        isComplete =  { isComplete }
        onKeyDown = {e => handleKeyDown(e, index) }
        onChange = {e => updateTodo(e, index) }
      />
    </TodoWrapper>

  )
}

export default TodoTask;