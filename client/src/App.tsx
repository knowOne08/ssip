// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Greetings } from './components/Greetings'

export const App = () => {
  // const [count, setCount] = useState(0)
  let b =  3;
  const a = `Abhi ${ b == 3 ? "Yes" : "No"}`;
  return <Greetings name={a} message={"yash"}/>
}

// export default App
