import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import TaskDsp from "./TaskDsp";
import NavBar from "./navBar";

import { Card, Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyTask() {
  const [task, setTask] = useState();
  const [poptrigger, setTrigger] = useState(false);
  const [state, setState] = useState(false);
  const params=useParams();
  const id=params.id;
  console.log("Table ",id)
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/task/all`,config).then((res) => {
      setTask(res.data);
      console.log(res.data);
    });
  }, [state]);
 console.log("hhi",process.env.REACT_APP_SERVER_URL)
  return (
    <>
     <NavBar></NavBar>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Task List</Card.Title>
                <p className="card-category">
             
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                    <th className="border-0">Task ID</th>
                      <th className="border-0">Task Name</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Status</th>
                  
                      <th className="border-0">Worker Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {task?.map((taskList,i) => {
                      return (
                        <>
                          <TaskDsp  obj={taskList} state={state} setState={setState}/>
                           
                          
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyTask;
