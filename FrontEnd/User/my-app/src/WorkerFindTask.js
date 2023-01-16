import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ReactPaginate from 'react-paginate';

import NavBar from "./navBar";
import WorkerDspTask from "./WorkerDspTask";
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function WorkerFindTask() {
  const [task, setTask] = useState();
  const [poptrigger, setTrigger] = useState(false);
  const [pageCount,setPageCount]=useState(0)
  const[category,setCategory]=useState(localStorage.getItem("category"));
  const [state, setState] = useState(false);
  const params=useParams();
  const id=params.id;
  console.log("cat ",category)
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};

  useEffect(() => {
    
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/task/findTask`,{category:category},config).then((res) => {
      setTask(res.data.task);
      setPageCount(res.data?.totalPages)
      console.log("Data",res.data);
    });
  }, [state]);
 console.log("hhi",process.env.REACT_APP_SERVER_URL)
 const handlePageClick  =  async (event) => {
  //  const newOffset = (event.selected * itemsPerPage) ;
  await  axios.post(`${process.env.REACT_APP_SERVER_URL}/user/task/findTask`,{category:category,page:(event.selected+1)},config).then((res) => {
      setTask(res.data?.task);
    console.log("Task page",task)})
    console.log(

      `User requested page number ${event.selected}, which is offset //{//newOffset}`
    );
   
  };
  return (
    <>
     <NavBar></NavBar>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Task List</Card.Title>
                <p className="card-category">
             
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
             
                <Table className="table-hover table-striped">
                  <thead>
                 
                    <tr>
                    <th className="border-0">Task ID</th>
                      <th className="border-0">Task Name</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Status</th>
                  
                  
                      
                      
                      <th>
                      <Button onClick={()=>{setCategory("Plumber");setState(!state)}}>
                        Plumber
                      </Button>
                      
                      </th>
                      <th>
                      <Button onClick={()=>{setCategory("Electrician");setState(!state)}}>
                      Electrician
                      </Button>
                      </th>
                      <th>
                      <Button onClick={()=>{setCategory("General");setState(!state)}}>
                      General
                      </Button>
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {task?.map((taskList,i) => {
                      return (
                        <>
                          <WorkerDspTask  obj={taskList} state={state} setState={setState} find={true} />
                           
                          
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
      <div style={{display:"flex",justifyContent:"Center"}}>
       <ReactPaginate 
       previousLabel="Previous"
       nextLabel="Next"
       pageClassName="page-item"
       pageLinkClassName="page-link"
       previousClassName="page-item"
       previousLinkClassName="page-link"
       nextClassName="page-item"
       nextLinkClassName="page-link"
        breakLabel="..."
        onPageChange={handlePageClick}

        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        marginPagesDisplayed={2}
      />
        </div>  
    </>
  );
}

export default WorkerFindTask;
