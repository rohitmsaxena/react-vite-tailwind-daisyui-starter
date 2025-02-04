import { useState } from 'react'
import reactLogo from './assets/react.svg'
import daisyLogo from '/daisyui.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
        <a href="https://v5.daisyui.com/" target="_blank">
          <img src={daisyLogo} className="logo daisy" alt="Daisyui logo"/>
        </a>
      </div>
      <h1 className="text-5xl font-bold">Vite + React + DaisyUI</h1>
      <div className="card">
        <button className="btn btn-neutral" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and DaisyUI logos to learn more
      </p>
    </>
  )
}

export default App
