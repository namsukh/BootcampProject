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

function Edit(prop) {

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
    
      <Container >
      <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col>
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
                       
                      
                        <>
                          <p>Select Category :</p> 
                          <input
                          id="c"
                            type="radio"
                            name="category"
                            value="Plumbing"
                            checked="true"
                            //onClick={()=>{setCat("Plumbing")}}
                            
                          />
                            <label for="User">Plumbing</label>
                          <br /> {" "}
                          <input
                          id="b"
                            type="radio"
                            name="category"
                            value="Electrician"
                           // onClick={()=>{setCat("Electrician")}}
                            
                          />
                            <label for="User">Electrician</label>
                          <br /> {" "}
                          <input
                            type="radio"
                            id="a"
                            name="category"
                            value="General"
                            //onClick={()=>{setCat("General")}}
                          />
                            <label for="User">General</label>
                          </>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Date</label>
                        <Form.Control
                          defaultValue={task?.Date}
                          placeholder="Date"
                          type="Date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                   
                    <Col className="pr-1" md="6">
                      <Form.Group >
                        <label>Details</label>
                        <Form.Control as ="textarea"
                          defaultValue={task?.Details}
                          placeholder="Details"
                          
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

export default Edit;
