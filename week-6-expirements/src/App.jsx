function App({InlineComponent}){
  return <div>
    <CardWrapper InlineComponent={<TextComponent/>}/>
  </div>  
}

function CardWrapper({InlineComponent}){
  return <div style={{border: "2px solid black"}}>{InlineComponent}</div>
}

function TextComponent(){
  return <div>
    hi there
  </div>
}

export default App;