import { Button } from "react-bootstrap";
import axios from "axios";
import { useState,useEffect } from "react";
import Details from "./Details";
import UpdateTask from "./UpdateTask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'



function TaskDsp({ obj, setState ,state}) {

  const complete = `{"status":"Completed"}`;
  const pending = `{"status":"Pending"}`;
  const cancel = `{"status":"Cancelled"}`;
  const Delete = `{"status":"Delete"}`;
  const[worker,getWorker]=useState();
  const[localState,setLocalSate]=useState(false);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/task/AssignedWorker/`+obj._id,config).then((res) => {
    const data=res.data;  
    
    console.log(res.data)
    if(data[0]?.workerID!=null){getWorker(data[0].workerID);}
    else{getWorker({name:"No Worker Assign yet"})}
    
    
    });
  }, [state]);
 
  return (
    <tr>
      <td>{obj._id}</td>
      <td>{obj.TaskName}</td>
      <td>{obj.Category}</td>
      <td>{obj.status}</td>
      <td> {worker?.name} </td>
      <td>
        {" "}
        <Details
          btn={faCircleInfo}
          name={"Details"}
          dtl={obj.Details}
          address={obj.Address}
          id={obj._id}
        ></Details>
      </td>
      <td>
        {" "}
        <UpdateTask
          btn={faRectangleXmark}
          tk={obj.TaskName}
          id={obj._id}
          updte={cancel}
          setState={setState}
          state={state}
          msg="Mark as Cancel ?"
          currentStatus={obj.status}
          updatedStatus={"Cancelled"}
          name={"Cancel"}
        ></UpdateTask>
      </td>
     
     
     
      
    </tr>
  );
}
export default TaskDsp;
