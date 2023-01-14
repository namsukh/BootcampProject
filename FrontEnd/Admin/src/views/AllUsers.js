import React, { useState, useEffect } from "react";
import axios from "axios";

import TaskDsp from "./TaskDsp";
import Details from "./Details";
import UserDsp from "./UserDsp";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function AllUsers() {
  const [task, setTask] = useState();
  const [poptrigger, setTrigger] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/admin/user/`).then((res) => {
      setTask(res.data);
    });
  }, [state]);
 console.log("hhi",process.env.REACT_APP_SERVER_URL)
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Task List</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                    <th className="border-0">User ID</th>
                      <th className="border-0">User Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">User Type</th>
                      <th className="border-0">Phone Number</th>
                      <th className="border-0">Cnic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {task?.map((taskList,i) => {
                      return (
                        <>
                          <UserDsp  obj={taskList} state={state} setState={setState}/>
                           
                          
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

export default AllUsers;
