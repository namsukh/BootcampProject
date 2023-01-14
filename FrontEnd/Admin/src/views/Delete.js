import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

//<FontAwesomeIcon icon="fa-solid fa-circle-check" />
import "./icon.css"
import { render } from 'react-dom';
function Delete({iid, msg, setState,btn, state,name,type,userName}) {
  
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState(false);
 // const [updated, setUpdated] = useState(JSON.parse(updte));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const renderTooltip = (props) => (
    <Tooltip id="" {...props}>
      {name}
    </Tooltip>
  );
   function  update(){
    
    console.log("id is ",iid)
  
    if(type=="User")
    {
      axios.delete(`http://localhost:3000/admin/del/user/`+iid).then((res) => {
      
      if(res.data=="deleted")
      {
        toast.success("Deleted",{position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",});
      }
      else
      {
        toast.warn("Not Found",{position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",});
      }

      
      
      setFlag(false)
      handleClose()
      
       
     }
    ).catch(err=>{
     toast.error("Error",{position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",});
     handleClose()
    });
   
    }
    
   
    
   

    setState(!state)
   
    
  }
 
 
  return (
    <>
     
    
     
     <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <FontAwesomeIcon className={name} icon={btn} onClick={handleShow} >
    
    </FontAwesomeIcon>
    </OverlayTrigger>
   
    
       
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>  {userName}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
      {msg}
        
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={update}>Confrim </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}
export default Delete;