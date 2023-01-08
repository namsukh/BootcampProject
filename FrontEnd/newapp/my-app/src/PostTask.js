import React, { useRef } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useLocation, NavLink,useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import NavBar from "./navBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";

function PostTask(prop) {
    const [date, setDate] = useState(new Date());
    console.log("Date is ",date)
  const params=useParams();
  const[state,setState]=useState(false);
  const[token,setToken]=useState(localStorage.getItem('token'));
 // const [ ,,,]=useRef();
  //const [taskNameRef,s]=useRef();
  const taskNameRef=useRef();
  const detailsRef=useRef();
  const categoryRef=useRef();
  const dateRef=useRef();
  const addressRef=useRef();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  const[task,setTask]=useState();
 
  function submit(e){
    e.preventDefault();
   const tsk ={TaskName:taskNameRef.current.value,Details:detailsRef.current.value,Category:categoryRef.current.value,Date:date,Address:addressRef.current.value}
      
      axios.post(`http://localhost:3000/user/task/createTask`,tsk,config).then((res) => {
      
      toast.success("Created",{position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",});
      
     
      //handleClose()
      
       
     }
    ).catch(err=>{
      
     toast.error(err.message,{position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",});
   //  handleClose()
    });
   
 
  }



  return (
    <>
    <NavBar></NavBar>
      <Container >
      <Row className="vh-100 d-flex justify-content-center align-items-center">
       
          <Col  md={8} lg={6} xs={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create Task</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={submit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label >Task Name </label>
                        <Form.Control
                          defaultValue={""}
                          ref={taskNameRef}
                          placeholder="Task Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label >Address</label>
                        <Form.Control
                        ref={addressRef}
                          defaultValue={""}
                          placeholder="Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label >Category</label>
                        <Form.Control
                        ref={categoryRef}
                          defaultValue={task?.Category}
                          placeholder="Category"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label >Date</label>
                        <DatePicker selected={date} onChange={(date) => {setDate(date);console.log(date)}} />
                        
                      </Form.Group>
                    </Col>
                    </Row>
                    
                  
                  <Row>
                   
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label >Details </label>
                        <Form.Control
                        ref={detailsRef}
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
                    Submit Task
                  </Button>
                 
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

export default PostTask;
