import React, { useState } from "react";
import shopping from "../../../assets/images/shopping.jpg";
import shopping2 from "../../../assets/images/shopping2.webp";
import shopping3 from "../../../assets/images/shopping3.jpg";
import { AiFillEye } from 'react-icons/ai';
import { Modal, Button } from 'antd';
import "antd/dist/antd.css";
import "./style.scss";



const DashboardComp = () => {
  const [data, setData] = useState([
    {
      name: "Vyome",
      age: 20,
      location: "USA",
      status: "Registered",
      rating: "*****",
      action:<AiFillEye/>
    },
    {
      name: "Vinay",
      age: "20",
      location: "USA",
      status: "Registered",
      rating: "*****",
      action:<AiFillEye/>
    },
    {
      name: "Kunal",
      age: "20",
      location: "USA",
      status: "Registered",
      rating: "*****",
      action:<AiFillEye/>
    },
    {
      name: "Casan",
      age: "20",
      location: "USA",
      status: "Registered",
      rating: "*****",
      action:<AiFillEye/>
    },
    {
      name: "Shivi",
      age: "20",
      location: "USA",
      status: "Registered",
      rating: "*****",
      action:<AiFillEye/>
    },
  ]);

  
  const [search, setSearch] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

 
  
  return (
    <div className="container">
      <div className="main">
        <p className="dashboard">Dashboard</p>
      </div>
      <div class="d-flex justify-content-around cards">
        <div className="row">
      <div className="col-lg-4">
      <div class="card" style={{width:'16rem'}}>
  <img src={shopping} class="card-img-top" alt="shopping Image" width='300px'height='200px'/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
<div className="col-lg-4">
<div class="card" style={{width:'16rem'}}>
  <img src={shopping2} class="card-img-top" alt="shopping Image" width='300px'height='200px'/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div className="col-lg-4">
<div class="card" style={{width:'16rem'}}>
  <img src={shopping3} class="card-img-top" alt="shopping Image" width='300px'height='200px'/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>
      </div>

        <div class=" my-3 search ">
          <div class="input-group mb-3  ">
            <input
              type="text"
              class="form-control search"
              placeholder="Recipient's username"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button class="btn bg-primary" type="button" id="button-addon2">
              Search
            </button>
          </div>
        </div>
        <div>
          <table className="table main-table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Location</th>
                <th scope="col">Status</th>
                <th scope="col">Registered</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((val) => {
                  if (search == "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.location}</td>
                    <td>{item.rating}</td>
                    <td>{item.status}</td>
                    <td onClick={showModal}>{item.action}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          
      <Modal title="Status of Action" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Table Viewed</p>
        
      </Modal>
        </div>
      </div>
    
  );
};
export default DashboardComp;
