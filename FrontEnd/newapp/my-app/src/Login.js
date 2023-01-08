import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useRef,useEffect } from "react";
import axios from "axios";
export default function Login() {
    let navigate = useNavigate();

    const email=useRef();
    const password=useRef();
  //  const navigate = Navigate();

    function onSubmit(e){
        e.preventDefault();
        console.log(email.current.value)
        const credentials={email:email.current.value,password:password.current.value}
        axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login/`,credentials).then((res) => {
            const data=res.data;  
          // console.log("tojen",data.token);
           localStorage.setItem("token", data.token);
           localStorage.setItem("type", data.type);
           console.log("token is ",localStorage.getItem("token"));
           console.log("Type is ",localStorage.getItem("type"));
         //   navigate.push("/user/"+data)
         navigate('/home')
            
            })
            .catch(err=>{
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
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
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
    </div>
  );
}
