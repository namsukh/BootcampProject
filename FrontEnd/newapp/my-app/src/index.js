import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import Home from './home';
import Signup from './Signup';
import PostTask from './PostTask';
import MyTask from './MyTask';
import Edit from './Edit';
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
          </Routes>
  </BrowserRouter>

</>
  

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
