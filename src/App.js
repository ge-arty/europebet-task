import "./App.css";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="app">
      {started ? <Popup /> : <Start setStarted={() => setStarted(true)} />}
    </div>
  );
}

export default App;
