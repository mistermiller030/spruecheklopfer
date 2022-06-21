import React from "react";
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
return(
<Router>
  <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />  
      <Route path="/register" element={<Register />} />  
    </Routes>
</Router>
  
  )
};

export default App;
