function App(){
  return <div>
    <CardWrapper>Hi Their</CardWrapper>
  </div>
}

function CardWrapper({children}){
  return <div style={{border: "2px solid black"}}>{children}</div>
}

export default App