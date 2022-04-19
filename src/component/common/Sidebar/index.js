import React, { useState } from "react";
import { history } from "helpers";
import "./style.scss";


function Sidebar(){
 const handleClickDash=()=>{
    history.push("/admin/dashboard");
  }
  const handleClickSide=()=>{
    history.push("/admin/subscreen");
  }
  return(
    
    <div class="sidebar">
<div><h3 className="menu-item fw-bolder text-light" onClick={handleClickDash}>Dashboard</h3></div>
<div><h3 className="menu-item fw-bolder text-light" onClick={handleClickSide}>Subscreen</h3></div>

</div>
  )
}

export default Sidebar;
