import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Button variant='outlined' onClick={() => setCount((count) => count + 1)}>Count is {count}</Button>
      </div>
    </>
  )
}

export default App
