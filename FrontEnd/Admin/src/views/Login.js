import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";


function Login() {
    const email=useRef();
    const password=useRef();
    const navigate = useHistory();

    function onSubmit(e){
        console.log(email.current.value)
        const credentials={email:email.current.value,password:password.current.value}
        axios.post(`${process.env.REACT_APP_SERVER_URL}/admin/login/`,credentials).then((res) => {
            const data=res.data;  
           
            navigate.push("/admin/dashboard")
            
            })
            .catch(err=>{
                console.log("Invalid user")
            })
        
    }
    
    //()=>{navigate.push("/admin/");}

  return (
    <>
        <Container className="centered">
            <Row>
            <Col className="mx-auto" lg="4" md="8" >
                <Form action="" className="form" method="">
                    <Card className="card-login">
                        <Card.Header className="text-center">
                            <div className="logo-holder d-inline-block align-top">
                            <h1>Login</h1>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Body>
                                <Form.Group>
                                    <label>Email address <span className="text-danger">*</span></label>
                                    <Form.Control placeholder="Enter Email" type="text" name="email" ref={email}  />
                                </Form.Group>
                                <Form.Group>
                                    <label>Password <span className="text-danger">*</span></label>
                                    <Form.Control placeholder="Enter Password" type="password" name="password" ref={password}  />
                                </Form.Group>
                            </Card.Body>
                        </Card.Body>
                        <Card.Footer className="ml-auto mr-auto">
                            <Button className="btn-filled" type="button" onClick={onSubmit}>Login</Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </Col>
            </Row>
        </Container>
    </>
  );
}

export default Login;
