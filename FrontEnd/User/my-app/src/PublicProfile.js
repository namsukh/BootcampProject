import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import TaskDsp from "./TaskDsp";
import NavBar from "./navBar";
import { ToastContainer, toast } from 'react-toastify';
import PublicDsp from "./PublicDsp";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PublicProfile() {
  const [task, setTask] = useState();
  const [poptrigger, setTrigger] = useState(false);
  const [state, setState] = useState(false);
  const params=useParams();
  const [iD, setID] = useState();

  const id=params.id;
  console.log("Table ",id)
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/task/workerBucketPublic/1`,{userId:id}).then((res) => {
      setTask(res.data.task);
 
    });
  }, [state]);
  useEffect(()=>{
    setID(`http://localhost:3000/${id}.jpg`);
    console.log(" id ",iD)
  },[task])
 console.log("hhi",process.env.REACT_APP_SERVER_URL)
  return (
    <>
     <NavBar></NavBar>
      <Container >
      <Row className="vh-100 d-flex justify-content-center align-items-center">

          <Col md="6">
         
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Task List {task?.userID?.name}</Card.Title>
                <div className="author">
                 
                 { (iD)&&( <img
                   style={{width:"100px",height:"100px",borderRadius:"50%"}}
                     alt="..."
                     className="avatar border-gray"
                     
                      src={iD}
                   ></img>)} 
                  
               </div>
                <p className="card-category">
             
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                    
                      <th className="border-0">Task Name</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Status</th>
                  
                      <th className="border-0">User Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {task?.map((taskList,i) => {
                      return (
                        <>
                          <PublicDsp  obj={taskList} state={state} setState={setState}/>
                           
                          
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
}

export default PublicProfile;
