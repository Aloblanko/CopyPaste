
import './App.css'
import { Fragment } from 'react'
import Clipboard from './components/layout/clipboard.jsx';

function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>CopyPaste </h1>
        <Clipboard />
      </div>
    </Fragment>

  );
}



export default App
