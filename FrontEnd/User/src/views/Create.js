import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useLocation, NavLink,useParams } from "react-router-dom";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";

function Create(prop) {

  const params=useParams();
  console.log("id",params.id);
  const[state,setState]=useState(false);
 

  const[task,setTask]=useState();
  useEffect(() => {
     axios.get(`${process.env.REACT_APP_SERVER_URL}/admin/task/`+params.id).then((res) => {
    const data=res.data;
      setTask(data);
   
    
    
    })
  }, []);
  console.log(task);
  return (
    <>
    
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Task</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Task Name</label>
                        <Form.Control
                          defaultValue={task?.TaskName}
                          placeholder="taskName"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue={task?.Address}
                          placeholder="Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Category</label>
                        <Form.Control
                          defaultValue={task?.Category}
                          placeholder="Category"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Date</label>
                        <Form.Control
                          defaultValue={task?.Date}
                          placeholder="Date"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                   
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Details</label>
                        <Form.Control
                          defaultValue={task?.Details}
                          placeholder="Details"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info" 
                  >
                    Update Task
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Create;
