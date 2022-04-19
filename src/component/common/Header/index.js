import React, { useState } from "react";
import "component/common/Header/header.scss";
import shoppy from '../../../assets/images/shoppy.jpg'
import logout from '../../../assets/images/logout.webp'
import Settings from "pages/Dashboard/Settings/Settings";
import { history } from "helpers";

// function Header(){
//   const [show, setShow]= useState(true)
//   return(
//     <div className="header d-flex justify-content-between">
//       <div>
//         <img src={shoppy} height='70px' width='250px' className={show?'logo':""}/>
//         <button onClick={()=>setShow(!show)}>&#9776;</button>
//         <p>Doodleblue</p>
//       </div>
//       <div className="mx-4 mt-3">
//         <p className="logout">Logout</p>
//       </div>
//     </div>
//   )
// }
// export default Header
function Header(){
  const [showLinks, setShowLinks] =useState(false)
  const handleDashboard=()=>{
    history.push("/admin/dashboard");
  }
  const handleSubscreen=()=>{
    history.push("/admin/settings");
  }
  const handleClick=()=>{
    history.push("/auth/login")
  }

  return(
    
    <div className='navbar'>
    <div className='left-side'>
    <div className='links' id={showLinks?"hidden":"" }>
        
       
          <a>Doodleblue</a>
          {showLinks&&<div className="menu-items">
            <p onClick={handleDashboard}>Dashboard</p>

            <p onClick={handleSubscreen}>Subscreen</p>
            </div>}
        
    </div>
    <button onClick={()=>setShowLinks(!showLinks)}>&#9776;</button>
    </div>
    
    <div className='right-side'>
        {/* <input type="text" placeholder='search...'/> */}
        <button className='btn btn-transparent'onClick={handleClick}>Logout</button>
    </div>
</div>
  )
}
export default Header

  
           