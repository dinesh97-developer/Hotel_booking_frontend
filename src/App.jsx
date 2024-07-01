import { Route,Routes, useParams } from "react-router-dom"

import Home from "./Pages/Home"
import Room from "./Pages/Room"
import SingleRoomWrapper from "./Pages/SingleRoomWrapper"
import Error from "./Pages/Error"

import "../src/css/App.css"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ForgotPassword from "./Pages/Forget"

export default function App() {
  return(
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/rooms/" element = {<Room />} />
        <Route path="/rooms/:slug" element = {<SingleRoomWrapper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/reg" element={<Register />} />
        <Route path="/Forgot-password" element ={<ForgotPassword/>}/>
        <Route element = {<Error />} />
      </Routes>
      <Footer />
  
    </>
  )
}

