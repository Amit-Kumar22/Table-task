import React, { useEffect, useState } from "react";
import Active from "./Active";
import Completed from "./Completed";
import Toggle from "./Toggle";
import "../Css/Home.css";
import { NavLink } from "react-router-dom";


function Home() {
  const [toggleUserDetail, setToggleUserDetail] = useState(false);
 

  return (
    <>
      <Toggle />
      <div className="main-container">
  
            <div className="sale-button">
              <div
                className="button1"
                onClick={() => setToggleUserDetail(false)}
              >
                Active Sale Order
              </div>
              <div
                className="button1"
                onClick={() => setToggleUserDetail(true)}
              >
                Completed Sale Order
              </div>
            </div>
          {toggleUserDetail ? <Completed /> : <Active />}

       
      </div>
    </>
  );
}

export default Home;
