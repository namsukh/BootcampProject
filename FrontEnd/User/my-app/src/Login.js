import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import { useRef,useEffect } from "react";
import axios from "axios";
export default function Login() {
    let navigate = useNavigate();
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const email=useRef();
    const password=useRef();
  //  const navigate = Navigate();

    function onSubmit(e){
        e.preventDefault();
        console.log(email.current.value)
        const credentials={email:email.current.value,password:password.current.value}
        axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login/`,credentials).then((res) => {
            const data=res.data;  
            console.log("data",data)
          // console.log("tojen",data.token);
           localStorage.setItem("token", data.token);
           localStorage.setItem("type", data.type);
           localStorage.setItem("category", data.category);
           localStorage.setItem("userId", data._id);
           console.log("token is ",localStorage.getItem("token"));
           console.log("Type is ",localStorage.getItem("type"));
         //   navigate.push("/user/"+data)
         navigate('/home')
            
            })
            .catch(err=>{
              toast.error("Invaild credentials",{position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",});
                console.log("Invalid user")
            })
        
    }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Home Service </h2>
                  <p className=" mb-5"></p>
                  <div className="mb-3">
                    <Form onSubmit={onSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center" >
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={email}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={password} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="/Signup" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />

    </div>
  );
}
