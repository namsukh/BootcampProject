import "./home.css"
import { useNavigate } from "react-router-dom";

import Login from "./Login";
import NavBar from "./navBar";
import homepic from './hompic.png'
import Worker from "./Worker.jpg"
import { useEffect, useState } from "react";
function Home() {
  const type=useState(localStorage.getItem("type"));
  let navigate = useNavigate();
  useEffect(()=>{
    if((localStorage.getItem("token"))==null)
    {
      navigate('/login')

    }
  },[])
 
    console.log("Home the token is "+localStorage.getItem("token"))
  return (
    <div >
    
      <NavBar></NavBar>
     <div>
     {/* <img src={(type=="Worker")?Worker:homepic}></img> */}
     </div>
    </div>
  );
}
export default Home;
