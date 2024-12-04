import './App.css'

function App() {
  return (
    <>
      <Header title="thamitha1"></Header>
      <Header title="thamitha2"></Header>
      <Header title="thamitha3"></Header>
      <Header title="thamitha4"></Header>
    </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
