import React, { useState, useEffect } from "react";
import axios from "axios";

import TaskDsp from "./TaskDsp";
import Details from "./Details";

import { Card, Table, Container, Row, Col } from "react-bootstrap";

function TableList() {
  const [task, setTask] = useState();
  const [poptrigger, setTrigger] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/task/all`).then((res) => {
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
                    <th className="border-0">Task ID</th>
                      <th className="border-0">Task Name</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">user Name</th>
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

export default TableList;
