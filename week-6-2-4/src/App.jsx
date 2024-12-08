import {useState, memo} from 'react'
function App(){
  const [count, setCount] = useState(0)
  function inputFunction(){
    console.log('hi thier')
  }
  return <div>
  <ButtonComponent initialFunction = {inputFunction}/>
  <button onClick={function(){
    setCount(count+1)
  }}>Counter {count}</button>
  </div>
}
const ButtonComponent= memo(function({initialFunction}){
  console.log('child render')
  return <>
  <button>click me</button>
  </>
})
export default App