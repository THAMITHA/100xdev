import './App.css'
import React, { useState} from 'react'

function App() {
  const [title, setTitle] = useState("my title is thamitha")
  function updateTitle(){
    setTitle('My name is '+ Math.random())
  }
  return (<div>
      <button onClick={updateTitle}>click me to change title</button>
      <Header title={title}></Header>
      <Header title="thamitha1"></Header>
      <Header title="thamitha2"></Header>
    </div>)
}

const Header = React.memo(function({title}){
  return(<div>
    {title}
  </div>
  )
})


export default App
