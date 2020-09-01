import React from 'react';
import {Switch , Route ,BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Customer from '../components/Customer';
import Registration from '../components/Registration';
import Login from '../components/Login';
import Owner from '../components/Owner';
import Main2 from '../components/Main';


const Main = () => {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <div className="row view1">
        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
        <div className="d-flex justify-content-center">
        <Route  exact path="/" component={()=>(<Main2 />)} />
        <Route  path="/Customer" component={()=>(<Customer />)} />
        <Route  path="/Owner" component={()=>(<Owner />)} />
        <Route  path="/Login" component={()=>(<Login />)} />
        <Route  path="/Register" component={()=>(<Registration />)} />
        </div>
        </div>
      </div>
         </BrowserRouter>
    </div>
    )
}
export default Main;  