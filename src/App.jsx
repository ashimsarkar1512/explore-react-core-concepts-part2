import './App.css'
import Counter from './counter'
import Friends from './friends'
import Users from './users'

function App() {
   
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2=()=>{
    alert('button touch')
  }

  const addToFive=(num)=>{
 alert('')
  }

  return (
    <>
      
      <h2>React Core concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
       <button onClick={handleClick}>click me</button>
       <button onClick={handleClick2}>click 2</button>

       <button onClick={()=>addToFive(3)}> click 4</button>
    </>
  )
}

export default App
