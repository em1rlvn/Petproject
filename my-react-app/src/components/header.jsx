import React from 'react'
import logo from '../images/images.png'
import { Link, useLocation } from "react-router-dom";
import logo2 from '../images/manas-3.jpg'

export default function Header() {
  const location = useLocation();

  return (
    <header>
        <div className="header-top">
            <img src={logo} alt="logo" className="logo" />
            <h1>Student's Personal Account</h1>
        </div>
        <div className="logo2" style={{backgroundImage: `url(${logo2})`}}>
            
        </div>
        <div className="Func">
      <Link to="/profile">
        <button className={`btn ${location.pathname === '/profile' ? 'active' : ''}`}>My Profile</button>
      </Link>

      <Link to="/courses">
        <button className={`btn ${location.pathname === '/courses' ? 'active' : ''}`}>My Courses</button>
      </Link>

      <Link to="/schedule">
        <button className={`btn ${location.pathname === '/schedule' ? 'active' : ''}`}>My Schedule</button>
      </Link>

      <Link to="/deadlines">
        <button className={`btn ${location.pathname === '/deadlines' ? 'active' : ''}`}>My Deadlines</button>
      </Link>
    </div>
    </header>
  );
}
