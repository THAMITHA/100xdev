import './App.css'
import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([
    {task:'go to gym',
    description: 'from 7-9'},
    {task:'study DSA',
      description: 'from 9-12'}
  ])

  function addTodo(){
    setTodos([...todos, {
      title: 'newTodo',
      description: 'newDescription'
    }])
  }
  return(

    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {
        todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )
}

function Todo(props){
  return<div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}





export default App
