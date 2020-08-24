import React, { createContext, useState } from 'react'

export const ListContext = createContext()

export function ListContextProvider(props) {
  const [todos, setTodos] = useState([])
  
  return (
    <ListContext.Provider value = {[todos, setTodos]}>
      {props.children}
    </ListContext.Provider>
  )
}