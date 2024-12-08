import {memo, useState} from 'react'
function App(){
  const [count, setCount] = useState(0)
  function logSomething(){
    console.log('child clicked')
  }
  return <>
  <ButtonComponent inputFunction= {logSomething}/>
  <button onClick={()=>{
    setCount(count+1)
  }}>Counter {count}</button>
  </>
}

const ButtonComponent= memo(({inputFunction})=>{
  console.log('child render')

  return <div>
    <button onClick={inputFunction}>Button Clicked</button>
  </div>
})

export default App