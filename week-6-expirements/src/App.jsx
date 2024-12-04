import './App.css'
import { useState } from 'react'

function App() {
  return (
    <HeaderWithButton></HeaderWithButton>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("thamitha1")
  function updateTitle(){
    setTitle('My name is '+ Math.random())
  }
  return (
    <div>
      <button onClick={updateTitle}>click me to change the title</button> 
      <Header title={title}></Header>
      <Header title="thamitha2"></Header>
    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
