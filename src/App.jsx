import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import Booking from './Booking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Booking 
      />
    </>
  )
}

export default App
