import "./App.css";
import { Fragment } from "react";
import Postit from "..//src/components/layout/Postit/";
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true ); // set second parameter to true if you want to use a debugger


function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>CopyPaste </h1>
        <Postit />
      </div>
    </Fragment>
  );
}

export default App;
