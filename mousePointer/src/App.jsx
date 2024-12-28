import {useState, useEffect} from 'react'
const useMousePointer=()=>{
  const [position, setPosition] = useState({x:0, y:0})
  const handleMouseChange=(e)=>{
    setPosition({x:e.clientX, y:e.clientY})
  }
  useEffect(()=>{
    window.addEventListener('mousemove',handleMouseChange)
    return ()=>{window.removeEventListener('mousemove', handleMouseChange)}
  },[])
  return position
}
function App(){
  const mousePointer = useMousePointer()
  return (<>
  your mouse position is {mousePointer.x}{mousePointer.y}
  </>)
}

export default App