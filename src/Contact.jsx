import React from 'react';



const Contact =() => {

    const aa = () =>
    {

alert("success1;")

    }
  return (
  <>

  <h1 className="text-center my-5 text-secondary"> Contact</h1>


  <div className="container-fluid">
    <div className="row">
        <div className="col-lg-6 col-md-6 col-6 mx-auto">

<form onSubmit={aa}>
        <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label mt-2">User Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Name" />
  <label for="exampleFormControlInput1" className="form-label mt-2">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email " />
  <label for="exampleFormControlInput1" className="form-label mt-2">Contact No</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Contact No " />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label mt-2">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button class="btn btn-primary" type="submit">Submit form</button>
</form>
  </div>
    </div>
</div>


  </>
  );
}

export default Contact;