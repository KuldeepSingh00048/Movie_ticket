import React from 'react'
import Navbar from './component/CommonNavbar'
import Home from './component/home'
import Footer from './component/footer'
import About from './component/about'
import Booking from './component/booking'
import Ticket from './component/ticketbook'
import UserTicket from './component/userTicket'
import { Routes, Route } from "react-router-dom";
const App =()=> {
  return (
    <>
    <div className=' bg-gradient-to-r from-yellow-300 to-yellow-200'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/booking' element={<Booking />} />
            {/* <Route path='/booking/:cityname' element={<Booking />} /> */}
            <Route path='/about' element={<About/>} />
            <Route path='/ticketbook' element={<Ticket/>} />
            <Route path='/userticket' element={<UserTicket/>} />
          </Routes>
            <Footer />
    </div>
    </>
  );
}

export default App;
