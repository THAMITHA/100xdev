import { useEffect, useRef, useState } from "react"

function App(){
    const [incomeTax, setIncomeTax] = useState(20000)
    const divRef=useRef()

    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHTML=10
        },1000)
    },[])
    return <>
    hi thier the income tax <div ref={divRef}>{incomeTax}</div></>
    
}
export default App