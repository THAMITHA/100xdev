import { useEffect, useState } from "react"

function App(){
  const [render, setRender] = useState(true)
  useEffect(()=>{
    setInterval(()=>{
      setRender(r=> !r)
    },1000)
  },[])
  return<>
    {render? <MyComponent/>: <div></div>}
  </>
}

function MyComponent(){
  useEffect(()=>{
    console.error('component mounted')
    return()=>{
      console.log('component unmounted')
    }
  },[])
  return <div>
    here is the components
  </div>
}

export default App