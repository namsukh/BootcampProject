import { Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Details from "./Details";
import UpdateTask from "./UpdateTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';

import StarsRating from "stars-rating";

function PublicDsp({ obj, setState, state }) {
  const complete = `{"status":"Completed"}`;
  const pending = `{"status":"Pending"}`;
  const cancel = `{"status":"Cancelled"}`;
  const Delete = `{"status":"Delete"}`;
  const [worker, getWorker] = useState("ef");
  const [localState, setLocalSate] = useState(false);
  const ratingChanged = (newRating) => {
    obj.Rating=newRating;
    axios.patch(`http://localhost:3000/user/task/update/`+obj._id,obj,config).then((res) => {
     
    toast.success("Updated",{position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",});
    
   // setFlag(false)
   // handleClose()
    
     
   }
  ).catch(err=>{
   toast.error("Error" +err.message,{position: "top-right",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",});
  // handleClose()
  });
    console.log(newRating)
  }
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
 
console.log(obj)
  return (
    <>
    <tr>
     
      <td>{obj?.taskID.TaskName}</td>
      <td>{obj?.taskID.Category}</td>
      <td>{obj?.taskID.status}</td>
       
     
      <td>
     <StarsRating
          count={5}
          color2={"orange"}
          color1={"Black"}
          edit={false}
          value={obj.taskID.Rating}
         // onChange={ratingChanged}
          size={24}
          //color2={"#ffd700"}
        />

        </td>
       
    </tr>
   
     </>

  );
}
export default PublicDsp;
