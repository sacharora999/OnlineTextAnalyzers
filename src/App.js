import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
      document.title = "TextUtils Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils dark Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Online Text Analyzers"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-5">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm title="Enter Your Text here" showAlert={showAlert} />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
