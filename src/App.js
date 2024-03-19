import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";

function App() {
  const [users,setUsers] = useState(
      [
          {
              username:"John",
              password:"John@123"
          },
          {
              username:"Dhivya",
              password:"Dhivya@123"
          }
      ]
  );
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setUsers={setUsers}/>} ></Route>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers}/>} ></Route>
        <Route path="/landing" element={<Landing/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
