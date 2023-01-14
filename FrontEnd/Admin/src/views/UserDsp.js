import { Button } from "react-bootstrap";
import Details from "./Details";
import axios from "axios";
import { useState,useEffect } from "react";
import UpdateTask from "./UpdateTask";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import Delete from "./Delete";
import StarsRating from "stars-rating";

function UserDsp({ obj, setState ,state}) {

  const complete = `{"status":"Completed"}`;
  const pending = `{"status":"Pending"}`;
  const cancel = `{"status":"Cancelled"}`;

  const[worker,getWorker]=useState();
  const[localState,setLocalSate]=useState(false);
  console.log("task ");


 
  return (
    <tr>
      <td>{obj._id}</td>
      <td>{obj.name}</td>
      <td>{obj.email}</td>
      {(obj.type=="Worker")?(<td style={{color:"Blue",fontWeight:"bold"}}>{obj.type}</td>)
      :(<td style={{color:"green",fontWeight:"bold"}}>{obj.type}</td>)}
      <td>{obj.phone}</td>
      <td>{obj.cnic}</td>
      
   

    
  
      <td>
        {" "}
        <Delete
        type="User"
          btn={faTrashCan}
          userName={obj.name}
          iid={obj._id}
          
          setState={setState}
          state={state}
          msg="Delete user ?"
        
            name={"Delete"}
        ></Delete>
      </td>
      <Details
          btn={faCircleInfo}
          name={"Details"}
          dtl={obj.Details}
          address={obj.Address}
          id={obj._id}
        ></Details>
    </tr>
  );
}
export default UserDsp;
