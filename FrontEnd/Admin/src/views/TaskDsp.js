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

import StarsRating from "stars-rating";

function TaskDsp({ obj, setState ,state}) {

  const complete = `{"status":"Completed"}`;
  const pending = `{"status":"Pending"}`;
  const cancel = `{"status":"Cancelled"}`;
  const Delete = `{"status":"Delete"}`;
  const[worker,getWorker]=useState();
  const[localState,setLocalSate]=useState(false);
  console.log("task ");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/admin/task/AssignedWorker/`+obj._id).then((res) => {
    const data=res.data;  
     console.log("data",data[0]?.workerID);
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
      <td> {obj.userID?.name} </td>
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
      <td>
           <StarsRating
          count={5}
          color2={"orange"}
          color1={"Black"}
          edit={false}
          value={obj.Rating}
         
          size={24}
          //color2={"#ffd700"}
        />
            </td>
    </tr>
  );
}
export default TaskDsp;
