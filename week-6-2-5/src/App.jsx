import { useState, useEffect, useRef } from "react";
function App(){
    const divRef = useRef()
    const [incomeTax, setIncomeTax] = useState(20000)
    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHTML = 10
        },3000)
    },[])
    return <>
    hi thier your income tax is <div ref={divRef}>{incomeTax}</div>
    </>
}

export default App