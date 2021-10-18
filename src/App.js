import React, { useState, useRef } from 'react'
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const addRef = useRef()

  function checkBox(id) {
    const newStuff = [...todos]
    const todo = newStuff.find(specificItem => specificItem.id === id)
    todo.isComplete = !todo.isComplete
    setTodos(newStuff)
  }

 function addTodo(event) {
    const taskName = addRef.current.value
    if (taskName){
      setTodos(oldTodos => {
        return [...oldTodos, { id: uuidv4(), name: taskName, isComplete: false}]
      })
      addRef.current.value = null
    } else {
      return null
    }
  }

  function clearTodos() {
    const newTodos = todos.filter(specificItem => !specificItem.isComplete)
    setTodos(newTodos)
  }


  return (
    <>
    <div className="flex-column margin-top">
      <TodoList todos={todos} checkBox={checkBox}/>
      <input ref={addRef} type="text" />
      <div className="flex-row">
      <button className="padding-5 margin-5" onClick={addTodo}>Add Item</button>
      <button className="padding-5 margin-5" onClick={clearTodos} >Clear All</button>
      </div>
      <div>Remaining items: {todos.length}</div>
    </div>
    </>
  );
}

export default App;
