import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Home from './home';
import Signup from './Signup';
import PostTask from './PostTask';
import MyTask from './MyTask';
import Edit from './Edit';
import WorkerFindTask from './WorkerFindTask';
import WorkersBucket from './WorkersBucket';
import User from './UserProfile';
import PublicProfile from './PublicProfile';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
<Routes>
                 <Route exact path='/' element={<Login/>}></Route>
                 <Route exact path='/login' element={<Login/>}></Route>
                 <Route exact path='/home' element={<Home/>}></Route>
                 <Route exact path='/Signup' element={<Signup/>}></Route>
                 <Route exact path='/postTask' element={<PostTask/>}></Route>
                 <Route exact path='/myTask' element={<MyTask/>}></Route>
                 <Route exact path='/Edit/:id' element={<Edit/>}></Route>
                 <Route exact path='/myBucket' element={<WorkersBucket/>}></Route>
                 <Route exact path='/findTask' element={<WorkerFindTask/>}></Route>
                 <Route exact path='/user' element={<User></User>}></Route>
                 <Route exact path='/publicProfile/:id' element={<PublicProfile></PublicProfile>}></Route>
          </Routes>
  </BrowserRouter>

</>
  

 
);

