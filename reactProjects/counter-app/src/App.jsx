import {useState} from 'react'
function App(){
    const [todos, setTodos] = useState([{
    title: 'goto gym',
    description: 'from 7-9'      
    },
    {
      title: 'learn DSA',
      description: 'from 10-12'
    }
  ])
  function addTodo(){
    setTodos([...todos,{
      title: 'newTitle',
      description: 'newDescription'
    }])
  }
  return <div>
    <button onClick= {addTodo}> add more todos</button>
    {
      todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })
    }
  </div>
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div> 
}

export default App;