import React from 'react';
import { NavLink} from 'react-router-dom';
import  './index.css';



const Menu =() => {
  return (
  <>
<div className="container-fluid">
    <div className="row">
        <div className="col-10 mx-auto">

  

<nav className="navbar navbar-expand-lg navbar-light  nav_c">
  <div className="container-fluid ">
    <a className="navbar-brand text-primary" href="#">SD TECH</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ul_fl">
        <li className="nav-item hh">
          <NavLink className="nav-link atoe"aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item hh">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item hh">
          <NavLink className="nav-link atoe"aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item hh">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>


     </div>
    </div>
</div>

  </>
  );
}

export default Menu;