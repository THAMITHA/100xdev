import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [render, setRender] = useState(true) 
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },1000)
  },[])
  return (
    <>
      {render? <MyComponent/>: <div></div>}
    </>
  )
}

function MyComponent(){
  useEffect(()=>{
    console.error("component mounted")
    return()=>{
      console.log("component unmounted")
    }
  }, [])
  return <div>
    From inside my component
  </div>
}

export default App
