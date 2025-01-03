import { useEffect, useState } from "react";
import axios from 'axios'
import { useIsOnline } from "./hooks/userOnline";


function useTodos(n){
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const value = setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
      setLoading(false)
    })
    }, n* 10000)
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
      setLoading(false)
    })
    return ()=>{
      clearInterval(value)
    }
  },[n])
  return {todos, loading}
}

function App(){
  const isOnline = useIsOnline()
  if(isOnline){
    return "you are online yay!"
  }
  return "you are offline, please connect"
}
function Track({todo}){
  return <div>
    {todo.title}
    <br/>
    {todo.description}
  </div>
}
export default App