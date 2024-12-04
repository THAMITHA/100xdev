import './App.css'
import React, { useState} from 'react'
let count = 4
function App() {
  const [todos, setTodos] =useState([{
    id: '1',
    title: 'goto gym',
    description: 'goto gym from 7-9'  },
    { id: '2',
      title: 'learn DSA',
      description: 'goto gym from 9-12'  },
      {
        id: '3',
        title: 'learn system design',
        description: 'goto gym from 1-5'  },  
  ])

  function addTodo(){
    setTodos([...todos,{
      id: count++,
      title: Math.random() ,
      description: Math.random()
    }])
  }
  return (<div>
    <button onClick={addTodo}>add new todo</button>
    {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
    )}
    </div>)
}

function Todo({title, description}){
  return<div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}
export default App
