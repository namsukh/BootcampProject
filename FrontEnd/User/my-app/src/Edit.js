import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  useLocation,
  NavLink,
  useParams,
  useAsyncError,
} from "react-router-dom";
import NavBar from "./navBar";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import moment from "moment";

function Edit(prop) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const params = useParams();
  console.log("id", params.id);
  const taskNameRef = useRef();
  const detailsRef = useRef();
  const [date, setDate] = useState();
  const addressRef = useRef();
  const [cat, setCat] = useState();
  const [task, setTask] = useState();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  function handleSubmit(e) {
    e.preventDefault();
    const tsk = {
      TaskName: taskNameRef.current.value,
      Details: detailsRef.current.value,
      Category: cat,
      Date: date,
      Address: addressRef.current.value,
    };
 
    axios
      .patch(`http://localhost:3000/user/task/update/` + params.id, tsk, config)
      .then((res) => {
        toast.success("Created", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        //handleClose()
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        //  handleClose()
      });
  }

  const taskDate = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user/task/` + params.id)
      .then((res) => {
        const data = res.data;
        setTask(data);

        setDate(new Date((data?.Date).toString()));
      });
  };
  useEffect(() => {
    taskDate();
  }, []);
  function onChangeValue(event) {
    setCat(event.target.value);
  }
  
  return (
    <>
      <NavBar></NavBar>
      <Container>
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
                          ref={taskNameRef}
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
                          ref={addressRef}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        {task && (
                          <div onChange={onChangeValue}>
                            <>
                              <p>Select Category :</p> 
                              <input
                                type="radio"
                                name="category"
                                value="Plumber"
                                defaultChecked={
                                  task?.Category == "Plumber" ? true : false
                                }
                              />
                              Plumber
                              <br /> {" "}
                              <input
                                value="Electrician"
                                type="radio"
                                name="category"
                                defaultChecked={
                                  task?.Category == "Electrician" ? true : false
                                }
                                //checked=
                              />
                              Electrician
                              <br /> {" "}
                              <input
                                type="radio"
                                id="a"
                                name="category"
                                value="General"
                                defaultChecked={
                                  task?.Category == "General" ? true : false
                                }

                                // onClick={()=>{setCat("General")}}
                              />
                              General
                            </>
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Date</label>
                        <DatePicker
                          selected={date}
                          onChange={(x) => {
                            setDate(x);
                            console.log(x);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Details</label>
                        <Form.Control
                          as="textarea"
                          defaultValue={task?.Details}
                          placeholder="Details"
                          ref={detailsRef}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleSubmit}
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
      <ToastContainer />
    </>
  );
}

export default Edit;
