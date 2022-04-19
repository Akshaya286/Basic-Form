import { history } from "helpers";
import React, { useState } from "react";
import "component/Auth/Login/style.scss";


const LoginComp = () => {
  
  const [userId, setUserId]=useState('')
  const [password, setPassword]=useState('')
  const [errors, setErrors]=useState(false)

  const handleClick=()=>{      
    if(!userId.match(/^[a-zA-Z ]*$/)){
      setErrors(true)
   }
   else{
       
       setUserId('')
   }
   if(!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
    setErrors(true)


 }
 else{
     
     setPassword('')
     history.push("/admin/dashboard");
 }
 }

  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col bg-image"></div>
        <div className="col">
          <div className="center align-center">
            <div className="mb-5">
              <h3 className="text-primary">Sign In</h3>
            </div>
            <div>
              <div className="input-group my-4 custom-input">
                  <input
                    type="text"
                    className="form-control bg-light"
                    placeholder="Enter UserID"
                    value={userId}
                    onChange={(e)=>setUserId(e.target.value)}
                  />
              
              </div>
              {errors&&<div><p className="text-danger">*Please enter alphabet characters only</p></div>}
              <div className="input-group mb-1 custom-input">
                
                  <input
                    type="password"
                    className="form-control bg-light"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                
              </div>
              {errors&&<div><p className="text-danger">*Please enter secure and strong password</p></div>}
              <div ><span className='text-decoration-underline'>Forgot Password?</span></div>
              </div>
            <div className="my-4">
              <button className="btn-success rounded custom-input p-2" onClick={handleClick}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
