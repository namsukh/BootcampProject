import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useRef, useState } from "react";
export default function Signup() {
  let navigate = useNavigate();

  const [state, setSate] = useState(false);
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();
  const name = useRef();
  const type = useRef();
  const [Category, setCat] = useState();
  function category(s) {
    setSate(s);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log("fd");
    if (
      password.current.value !== cpassword.current.value ||
      password.current.value === "" ||
      email.current.value === ""
    ) {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    console.log(email.current.value);
    const credentials = {
      email: email.current.value,
      password: password.current.value,
      name: name.current.value,
      type: state ? "Worker" : "User",
    };
    console.log(credentials);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/register/`, credentials)
      .then((res) => {
        const data = res.data;
        console.log(res.data);
        toast.success("User Registered ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/login');
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
        console.log("Invalid user" + err.message);
      });

    console.log(credentials);
  }

  return (
    <>
    
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
                    <Form.Group className="mb-3" >
                        <Form.Label className="text-center" >
                          Name
                        </Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" ref={name}/>
                      </Form.Group>
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
                      
                    <Form.Group>
                      <label>
                        Confrim Password <span className="text-danger"></span>
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
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}
