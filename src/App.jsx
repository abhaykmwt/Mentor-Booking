import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar";
import Booking from "./Booking";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Booking" Component={Booking }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
