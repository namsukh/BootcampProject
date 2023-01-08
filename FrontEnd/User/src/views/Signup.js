import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { updateConstructorTypeNode } from "typescript";
import { Dropdown } from "react-bootstrap";

function Signup() {
  const [state, setSate] = useState(false);
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();
  const name = useRef();
  const type = useRef();
const [Category,setCat]=useState();
  const navigate = useHistory();
  function category(s) {
    setSate(s);
  }
  function onSubmit(e) {
     e.preventDefault();

    if(password.current.value!=cpassword.current.value||(password.current.value==''||email.current.value==''))
    {
        toast.error("Error",{position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",});
    return;
    }
    console.log(email.current.value);
    const credentials = {
      email: email.current.value,
      password: password.current.value,
      name:name.current.value,
      type:state? 'Worker':'User',
    };
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/register/`,credentials).then((res) => {
        const data=res.data;  
       console.log(res.data);
       toast.success("Login",{position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",});
        })
        .catch(err=>{
            toast.error(err.message,{position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",});
            console.log("Invalid user"+err.message)
        })

    console.log(credentials);
  }

  //()=>{navigate.push("/admin/");}

  return (
    <>
      <Container className="centered">
        <Row>
          <Col className="mx-auto" lg="4" md="8">
            <Form action="" className="form" method="" onSubmit={onSubmit}>
              <Card className="card-login">
                <Card.Header className="text-center">
                  <div className="logo-holder d-inline-block align-top">
                    <h1>Signup</h1>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Body>
                    <Form.Group>
                      <label>
                        Email <span className="text-danger">*</span>
                      </label>
                      <Form.Control
                        placeholder="Enter Email"
                        type="text"
                        name="email"
                        id="validationDefault01"
                        isValid={false}
                        ref={email}

                      />
                      <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>


                    </Form.Group>
                    <Form.Group>
                      <label>
                        Name<span className="text-danger">*</span>
                      </label>
                      <Form.Control
                        placeholder="Enter Name "
                        type="text"
                        name="name"
                        ref={name}
                      />
                    </Form.Group>
                    <Form.Group>
                      <label>
                        Password <span className="text-danger">*</span>
                      </label>
                      <Form.Control
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                        ref={password}
                      />
                    </Form.Group>
                    <Form.Group>
                      <label>
                        Confrim Password <span className="text-danger">*</span>
                      </label>
                      <Form.Control
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                        ref={cpassword}
                      />
                    </Form.Group>

                    <Form.Group>
                      <p>Signup as :</p> {" "}
                      <input
                        type="radio"
                        id="user"
                        name="type"
                        value="User"
                        
                        onClick={() => category(false)}
                      />
                        <label for="User">User</label>
                      <br /> {" "}
                      <input
                        type="radio"
                        id="Worker"
                        name="type"
                        value="Worker"
                        
                        onClick={() => category(true)}
                      />
                        <label for="Worker">Worker</label>
                    </Form.Group>
                    <Form.Group >
                      {state && (
                        <>
                          <p>Select Category :</p> {" "}
                          <input
                          id="c"
                            type="radio"
                            name="category"
                            value="Plumbing"
                            onClick={()=>{setCat("Plumbing")}}
                            
                          />
                            <label for="User">Plumbing</label>
                          <br /> {" "}
                          <input
                          id="b"
                            type="radio"
                            name="category"
                            value="Electrician"
                            onClick={()=>{setCat("Electrician")}}
                            
                          />
                            <label for="User">Electrician</label>
                          <br /> {" "}
                          <input
                            type="radio"
                            id="a"
                            name="category"
                            value="General"
                            onClick={()=>{setCat("General")}}
                          />
                            <label for="User">General</label>
                          <br /> {" "}
                        </>
                      )}
                    </Form.Group>
                  </Card.Body>
                </Card.Body>
                <Card.Footer className="ml-auto mr-auto">
                  <Button
                    className="btn-filled"
                    type="onSubmit"

                  >
                    Login
                  </Button>
                </Card.Footer>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />

    </>
  );
}

export default Signup;
