import "./App.css";
import Alert from "./Components/Alert";
import NavBar from "./Components/NavBar";
import TextForms from "./Components/TextForms";
import About from "./Components/About";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, types) => {
    setAlert({
      msg: message,
      type: types,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212545";
      document.body.style.color = "#fff";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212530";
      showAlert("Light Mode has Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const changeColor = () => {
    if (mode === "light") {
      setMode("success");
      document.body.style.color = "#fff";
      document.body.style.backgroundColor = "#053326";
    } else if (mode === "secondary") {
      setMode("success");
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  };

  const router = createBrowserRouter([
    {
      path : '/about',
      element : <><NavBar title = "TextUtils" mode = {mode} aboutText="About Us" services="Our Services" toggleMode={toggleMode} changeColor = {changeColor}/><About mode={mode}/></>
    },

    {
      path : '/',
      element : <><NavBar title = "TextUtils" mode ={mode} aboutText="About Us" services="Our Services" toggleMode={toggleMode} changeColor = {changeColor}/>
      <div className="container my-5">
      <TextForms heading="Enter text Here"
      mode={mode}
      toggleMode={toggleMode}
      showAlert={showAlert}
      changeColor={changeColor}/></div></>
    }

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}
export default App;


{/* <Navbar
title="Text Utillls"
aboutText="About us"
services="Our Services"
mode={mode}
toggleMode={toggleMode}
changeColor={changeColor}
/> 
<Alert alert={alert} />

<TextForms
                
              />

              <About mode={mode} toggleMode={toggleMode} />
*/
}