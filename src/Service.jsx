import React from 'react';
import Card from './Card';
import Sdata from './Sdata';



const Service =() => {
  return (
  <>

<h1 className="text-center my-5 text-dark"> Service</h1>

<div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
        <div className="row g-5">

            {
              Sdata.map((cval,ind) => 
              {
                  return(
                      <>
                      <Card id={ind} imgs={cval.imgsrc}/>
                      </>


                  );
              })

            }
            <Card imgs={Sdata[0].imgsrc}/>
          


    </div>

        </div>
    </div>
</div>


  </>
  );
}

export default Service;