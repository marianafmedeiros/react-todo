import React, { useContext, useEffect } from 'react';
import styled from 'styled-components'
import TodoTask from '../TodoTask';
import TodoInput from '../TodoForm';
import { ListContext } from '../../context/ListContext'

const TodoListWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`


function TodoList () {
  const [ todos, setTodos ] = useContext(ListContext);
  
  useEffect (() => {
    let myTodos = localStorage.getItem('todoList');
    if (myTodos !== null) {
        myTodos = JSON.parse(myTodos)
        setTodos(myTodos)
        
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
    <TodoListWrapper>
      <TodoInput />
        <ul style = {{padding: 0 }}>
          {
            todos.length === 0 && (
              <span>What are your plans for today? </span>
            )
          }

          {todos.map((todo, index) => (
            <TodoTask 
              key = { index }
              task = { todo } 
              index = { index } 
            />
          ))

          }
        </ul>
    </TodoListWrapper>

  )
}

export default TodoList;