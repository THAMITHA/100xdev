import { useEffect, useState } from "react"
import { Component } from "react"

function App(){
  const [render, setRender] = useState(true)

  useEffect(()=>{
    setInterval(()=>{
      setRender(r=>!r)
    }, 5000)
  },[])

  return (
  <>
    {render? <MyComponent/>: <div></div>}
  </>)
}
class MyComponent extends Component{
  componentDidMount(){
    console.log("component mounted")
  }
  componentWillUnmount(){
    console.log("unmounted")
  }

  render(){
    return <div>hi there</div>
  }
}

export default App