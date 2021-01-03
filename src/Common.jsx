import React from 'react';
import C from "../src/img/c.jpg";
import { NavLink} from 'react-router-dom';



const Common =(props) => {
  return (
  <>

<section id="header" className="pt-5 d-flex align-items-center">
<div className="container">
    <div className="row">
   <div className="col-10 mx-auto">
   <div className="row">
       <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
<h1>

    Grow Your Business with <strong>SDTECH</strong>
</h1>
<h2 className="my-3">we are team of telented developer making websites</h2>

<div className="mt-3">
    <NavLink to={props.to} className="btn-get-started">Get Started</NavLink>
</div>


       </div>

       <div className="col-lg-6 order-1 order-lg-2 heder_img">
           <img src={C}  className="img-fluid animated" alt="home img"/>
       </div>

       </div>


   </div>


    </div>
</div>



</section>

  </>
  );
}

export default Common;
