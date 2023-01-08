/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Switch ,useParams,useHistory} from "react-router-dom";
import { useState } from "react";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import dashboard from "../views/Dashboard";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
import Userp from "views/UserProfile";
import Dashboard from "../views/Dashboard";

function User() {
  const params=useParams();
  const histor=0;
  const [token,setToken]=useState(params.id);
  const navigate=useHistory();
  


  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  function myfunc(){
  React.useEffect(()=>{

    navigate.push('/user/home')
  },[])
 
  
  }
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
 
  React.useEffect(() => {
    
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
      
        <div  ref={mainPanel}>
        <AdminNavbar token={token}/>
        {myfunc()}
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default User;
