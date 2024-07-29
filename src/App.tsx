import { useState } from 'react'
import exlogo from '../public/favicon-3.png'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('')


  const changeBackground = async()=>{

    const [tab] = await chrome.tabs.query({active: true});


    chrome.scripting.executeScript<string[], void>({
      target: {tabId: tab.id!},
      args: [color],
      func: (color)=>{
        document.body.style.backgroundColor = color;
      }
    });
  }




  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={exlogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Change BG Color</h1>
      <div className="card">
        <input type="color" onChange={(e) => setColor(e.target.value)}/>
        <button onClick={changeBackground}>
          CLICK ME
        </button>
      </div>
      <p className="read-the-dcs">
        Made by Absar Ahmad during his quest to learn building extensions.
      </p>
    </>
  )
}

export default App
