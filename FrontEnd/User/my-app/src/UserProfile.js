import React from "react";
import { useState, useEffect, useRef } from "react";
// react-bootstrap components
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {Buffer} from 'buffer';

import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import NavBar from "./navBar";
function User() {
  const [type, setType] = useState(localStorage.getItem("type"));
  const [Category, setCat] = useState();
  const [iD, setID] = useState();
  const [file,setFile]=useState();
  const [user, setUser] = useState();
  const name = useRef();
  const phone = useRef();
  const cnic = useRef();

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
 
  function uploadhandler(event) {
    let formData = new FormData();
    formData.append("img",event.target.files[0])
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/upload/`,formData,config)
      .then((res) => {
        const data = res.data;
        //setUser(data);
        console.log(data);
      });
  }
  useEffect(()=>{
    setID("http://localhost:3000/"+user?._id+".jpg");
    console.log(" id ",iD)
  },[user])
  useEffect( () => {
     axios.get(`${process.env.REACT_APP_SERVER_URL}/user/userProfile/`, config)
      .then((res) => {
        const data = res.data;
        setUser(data);
        console.log(data)
      
       
      });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const usr = {
      name: name.current.value,
      phone: phone.current.value,
      category: Category,
      cnic: cnic.current.value,
    };
    axios
      .patch(`http://localhost:3000/user/updateUser/`, usr, config)
      .then((res) => {
        toast.success("Updated", {
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
  return (
    <>
    {console.log(user?._id)}
      <NavBar></NavBar>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          defaultValue={user?.name}
                          placeholder="Company"
                          type="text"
                          ref={name}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          defaultValue={user?.email}
                          type="email"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Phone Number</label>
                        <Form.Control
                          defaultValue={user?.phone}
                          type="tel"
                          ref={phone}
                          pattern="[0-9]{11}"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Cnic</label>
                        <Form.Control
                        ref={cnic}
                          defaultValue={user?.cnic}
                          pattern="[0-9]{13}"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      {user && type == "Worker" && (
                        <>
                          <p>Select Category :</p> {" "}
                          <input
                            id="c"
                            type="radio"
                            name="category"
                            value="Plumber"
                            defaultChecked={
                              user?.category == "Plumber" ? true : false
                            }
                            onClick={() => {
                              setCat("Plumber");
                            }}
                          />
                            <label for="User">Plumber</label>
                          <br /> {" "}
                          <input
                            id="b"
                            type="radio"
                            name="category"
                            value="Electrician"
                            onClick={() => {
                              setCat("Electrician");
                            }}
                            defaultChecked={
                              user?.category == "Electrician" ? true : false
                            }
                          />
                            <label for="User">Electrician</label>
                          <br /> {" "}
                          <input
                            type="radio"
                            id="a"
                            name="category"
                            value="General"
                            onClick={() => {
                              setCat("General");
                            }}
                            defaultChecked={
                              user?.category == "General" ? true : false
                            }
                          />
                            <label for="User">General</label>
                          <br /> {" "}
                        </>
                      )}
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleSubmit}
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
            
              <Card.Body>
                <div className="author">
                 
                  { (iD)&&( <img
                    style={{width:"200px",height:"200px",borderRadius:"50%"}}
                      alt="..."
                      className="avatar border-gray"
                      
                       src={iD}
                    ></img>)}
                   
                </div>
                <input
        type="file"
        name="myImage"
        onChange={uploadhandler}
      />
              
              </Card.Body>
            
            </Card>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
}

export default User;
