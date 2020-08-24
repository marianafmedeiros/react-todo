import React from 'react';
import cafecotech from './assets/cafecotech_lightblue.png';
import './App.css';
import TodoList from './components/TodoList';
import { ListContextProvider } from './context/ListContext'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={cafecotech} className="App-logo" alt="logo" />
        <ListContextProvider>
          .: My Tasks :. 
          <TodoList />
        </ListContextProvider>
      </header>
    </div>
  );
}

export default App;
