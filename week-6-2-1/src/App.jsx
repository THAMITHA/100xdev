import { useState, useEffect } from 'react'
import axios from "axios"
function App() {
  const {selectedId, setSelectedId} = useState(1)
  return (
    <>
    <button onClick={function onClickHandler(){
      setSelectedId(1)
    }}>1</button>
     <button onClick={function onClickHandler(){
      setSelectedId(2)
    }}>2</button>
     <button onClick={function onClickHandler(){
      setSelectedId(3)
    }}>3</button>
     <button onClick={function onClickHandler(){
      setSelectedId(4)
    }}>4</button>

    <Todo id={selectedId} />
    </>
  )
}

function Todo({id}){
  const {todo, setTodos} = useState({})
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then((response)=>{
      setTodos(response.data.todo)
    })
  },[id])
  return <div>
  Id:{id}  
  <h1>{todo.title}</h1>
  <h4>{todo.description}</h4>
  </div>
}

export default App
