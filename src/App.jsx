import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'
import Clipboard from './components/layout/clipboard.jsx';

function App() {
  return (
    <div className="App">
      <h1>My React Clipboard App</h1>
      <Clipboard />
    </div>
  );
}



export default App
