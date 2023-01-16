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
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddToBucket from "./AddToBucket";
import StarsRating from "stars-rating";

function WorkerDspTask({ obj, setState, state, find} ) {
  const [handler, setHandler] = useState(find ? obj:obj.taskID);

  const complete = `{"status":"Completed"}`;
  const pending = `{"status":"Pending"}`;
  const cancel = `{"status":"Cancelled"}`;
  const Delete = `{"status":"Delete"}`;
  const [worker, getWorker] = useState();
  const [localState, setLocalSate] = useState(false);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  useEffect(()=>{
    setHandler(find ? obj:obj.taskID)
  })

  return (
    <tr>
      <td>{handler._id}</td>
      <td>{handler.TaskName}</td>
      <td>{handler.Category}</td>
      <td>{handler?.userID?.name}</td>
      <td>{handler.status}</td>
      
      <td>
        {" "}
        <Details
          btn={faCircleInfo}
          name={"Details"}
          date={handler.Date}
          dtl={handler?.Details}
          address={handler?.Address}
          id={handler?._id}
        ></Details>
      </td>
     
      
        {find ? (
          <>
          <td>
  <AddToBucket
            btn={faPlus}
            tk={handler?.TaskName}
            id={handler?._id}
            setState={setState}
            state={state}
            currentStatus={handler?.status}
            updatedStatus={"AddToBucket"}
            name={"AddtoBucket"}
            msg="Add to Bucket ?"
          ></AddToBucket>
          </td>
          
            </>
        
        ) : (<>
        
          <td>
             <UpdateTask
            btn={faCircleCheck}
            tk={handler?.TaskName}
            id={handler?._id}
            updte={complete}
            setState={setState}
            state={state}
            currentStatus={handler?.status}
            updatedStatus={"Completed"}
            name={"Complete"}
            msg="Mark as Completed ?"
          ></UpdateTask>
          </td>
            <td>
            <UpdateTask
                btn={faUserXmark}
                tk={handler.TaskName}
                id={handler._id}
                updte={pending}
                setState={setState}
                state={state}
                currentStatus={handler.status}
                updatedStatus={"Pending"}
                name={"RemoveWorker"}
                msg="Are you sure to remove worker?"
              ></UpdateTask>
            </td>
            <td>
            {((handler.status=="Completed")&&(localStorage.getItem('type')=="Worker"))?(<StarsRating
          count={5}
          color2={"orange"}
          color1={"Black"}
          edit={false}
          value={handler.Rating}
         
          size={24}
          //color2={"#ffd700"}
        />):("")}
            </td>

            </>
         
        )}
     
    
    </tr>
  );
}
export default WorkerDspTask;
