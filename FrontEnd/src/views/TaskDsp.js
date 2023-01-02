import { Button } from "react-bootstrap";
import Details from "./Details";
import axios from "axios";
import { useState,useEffect } from "react";
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
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/admin/task/AssignedWorker/`+obj._id).then((res) => {
    const data=res.data;  
   
    if(data[0]!=null){getWorker(data[0].workerID);}
    else{getWorker("No Worker Assign yet")}
    
    
    });
  }, [state]);
 
  return (
    <tr>
      <td>{obj._id}</td>
      <td>{obj.TaskName}</td>
      <td>{obj.Category}</td>
      <td>{obj.status}</td>
      <td> {"user"} </td>
      <td> {worker} </td>

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
          btn={faCircleCheck}
          tk={obj.TaskName}
          id={obj._id}
          updte={complete}
          setState={setState}
          state={state}
          currentStatus={obj.status}
          updatedStatus={"Completed"}
          name={"Complete"}
          msg="Mark as Completed ?"
        ></UpdateTask>
      </td>
      <td>
        {" "}
        <UpdateTask
          btn={faUserXmark}
          tk={obj.TaskName}
          id={obj._id}
          updte={pending}
          setState={setState}
          state={state}
          currentStatus={obj.status}
          updatedStatus={"Pending"}
          name={"RemoveWorker"}
          msg="Are you sure to remove worker?"
        ></UpdateTask>
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
