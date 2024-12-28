import {useState, useEffect} from 'react'
import axios from "axios"

function App(){
  const [selectedId,setSelectedId] = useState(1)
  return <>
  <button onClick={function(){
    setSelectedId(1)
  }}>1</button>
  <button onClick={ function(){
    setSelectedId(2)
  }
  }>2</button>
  <button onClick={
    function(){
      setSelectedId(3)
    }
  }>3</button>
  <button onClick={
    function(){
      setSelectedId(4)
    }
  }>4</button>
  <Todo id={selectedId}></Todo>
  </>
}

function Todo({id}){
  const {todo,setTodos} = useEffect({})
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response=>{
      setTodos(response.json.todo)
    }
    )
  },[id])
  return <>
     id: {id} 
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
  </>
}

export default App