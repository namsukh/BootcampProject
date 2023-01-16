import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./icon.css"
//import Create from './Create';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useLocation, NavLink,useParams } from "react-router-dom";

import { Nav } from "react-bootstrap";
function Details(prop) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderTooltip = (props) => (
    <Tooltip id="" {...props}>
      {prop.name}
    </Tooltip>
  );
  return (
    <>
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
     <FontAwesomeIcon className={prop.name} icon={prop.btn} onClick={handleShow} />
     
    </OverlayTrigger>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <span style={{fontSize:"24px" ,fontWeight:"normal"}}>{prop.dtl}</span>
        

        <Modal.Title>Address : <span style={{fontSize:"20px" ,fontWeight:"normal"}}>{prop.address}</span></Modal.Title>
       
       
       </Modal.Body>
       <Modal.Body>
       <span style={{fontSize:"24px" ,fontWeight:"Bold"}}> Date: </span> <span style={{fontSize:"20px" ,fontWeight:"normal"}}>{prop.date}</span>
       </Modal.Body>
       <Modal.Body>
        <NavLink
                    to={"/Edit/"+prop.id}
                    className="nav-link"
                    activeClassName="active"
                   >
                  {localStorage.getItem("type")=="User"?("Edit"):("")}
                   
                  </NavLink>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Details;