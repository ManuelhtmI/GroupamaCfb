import "./App.css";
import Clean from "./components/Clean/Clean.jsx";
// import Faq from "./components/FrequentlyAskedQuestions/FrequentlyAskedQuestions.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Faq from "./components/FAQ/Faq";
import Preload from './components/Preloader/Preloader';

function App() {
  const [spinner, setSpinner] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000000);
    console.log(hasClicked)

  }, []);

  function skip() {
    setHasClicked(!hasClicked);
  }



  return (
    <>
      <div className="App">
        <Routes>

          <Route path="/" element={<Preload />} />

          <Route path="/trouvetonclub" element={<Clean />} />
          {/* <Route path="/faq" element={<Faq/>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
