import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import TaskDsp from "./TaskDsp";
import NavBar from "./navBar";
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import "./myTask.css"
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyTask() {
  const [task, setTask] = useState();
  const [poptrigger, setTrigger] = useState(false);
  const [state, setState] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage=10;
  const endOffset = itemOffset + itemsPerPage;
  const params=useParams();
  const id=params.id;
  console.log("Table ",id)
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/task/all/1`,config).then((res) => {
      setTask(res.data?.task);
      setPageCount(res.data?.totalPages)
      console.log("Total Pages ",res.data?.totalPages);
    });
  }, [state]);
 
  const handlePageClick  =  async (event) => {
  //  const newOffset = (event.selected * itemsPerPage) ;
  await  axios.get(`${process.env.REACT_APP_SERVER_URL}/user/task/all/`+((event.selected)+1),config).then((res) => {
      setTask(res.data?.task);
    console.log("Task page",task)})
    console.log(

      `User requested page number ${event.selected}, which is offset //{//newOffset}`
    );
    //setItemOffset(newOffset);
  };
 // console.log("hhi",process.env.REACT_APP_SERVER_URL);

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
                  
                      <th className="border-0">Worker Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {task?.map((taskList,i) => {
                      return (
                        <>
                          <TaskDsp  obj={taskList} state={state} setState={setState}/>
                           
                          
                        </>
                      );
                    })}
                  </tbody>
                 
                </Table>
              </Card.Body>
            </Card>
           
          </Col>
      
    
            </Row>
        <ToastContainer />
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
       // nextLabel="next >"
        //pageClassName="page-item"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
       // previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        marginPagesDisplayed={2}
      />
        </div>  
    </>
  );
}

export default MyTask;
