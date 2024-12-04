import './App.css'
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("thamitha1")
  function updateTitle(){
    setTitle('My name is '+ Math.random())
  }
  return (
    <>
      <button onClick={updateTitle}>click me to change the title</button> 
      <Header title={title}></Header>
      <Header title="thamitha2"></Header>
      <Header title="thamitha3"></Header>
      <Header title="thamitha4"></Header>
    </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
