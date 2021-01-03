import React from 'react';
import  './index.css';



const Card =(props) => {
  return (
  <>
  <div className="col-10 col-md-4 mx-auto">

<div className="card " >
  <img src={props.imgs} className="card-img-top img_h" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
  </>
  );
}

export default Card;
