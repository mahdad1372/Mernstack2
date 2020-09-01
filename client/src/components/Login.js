import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';

 class PersonList extends React.Component {
    
    constructor(props) {
        super(props);
    
      }
    
  state = {
    Name: '',
    Email: '',
    Password: '',
    text: this.props.text ,
    data: '' ,
    Owner : true ,
    success : false
  }

   owner () {
    this.setState({ Owner : true});
    this.props.Press1();
  }

   customer() {
    this.setState({ Owner : false});
  }

  handleChange = event => {
    this.setState({ Name: event.target.value });
  }


  handleChange3 = event => {
    this.setState({ Password: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();
    const cookies = new Cookies();
    
   
    const user = {
        Name: this.state.Name ,
        Password: this.state.Password
    };
    const config = {
        headers: { Authorization: `${cookies.get('Token')}` }
    };

    if (this.state.Owner === true){
        axios.post(`http://localhost:8000/login/owner`,  user , config )
        .then(res => {
          this.setState({ success: res.data.data});
          if (this.state.success === true){
            this.props.history.push('/Owner')
          }
        })

    }else{
        axios.post(`http://localhost:8000/login/customer`,  user , config )
        .then(res => {
         this.setState({ success: res.data.data});
         if (this.state.success === true){
          this.props.history.push('/Customer')
        }
        })
    }

  }

  render() {

    return (
      <div className="card" style={{width: '18rem'}}>
      <div className="card-body text-center">
      <h5 className="card-title">Please select which type you want for login?</h5>
      <button type="submit" className="btn btn-info mt-3 mr-3 mb-3"  onClick={() => {
          this.owner();
        }}>Owner</button>
           <button type="submit" className="btn btn-danger mt-3 mb-3" onClick={() => {this.customer();}}>Customer</button>
    <h5 className="card-title">{this.props.text}</h5>
        <h6 className="card-subtitle mb-2 text-muted">please complete your info</h6>

            <form onSubmit={this.handleSubmit}>
            <h6 className="card-title">Name</h6>
             <input type="text" name="name" onChange={this.handleChange} />
           <br/>

             <h6 className="card-title mt-2">Password</h6>
             <input type="text" name="name" onChange={this.handleChange3} /><br/>
             <a className="mt-3">{this.state.data}</a><br/>
           <button type="submit" className="btn btn-info mt-3">Submit</button><br/>
          
         </form>
      </div>
    </div>

    )
  }
}

const mapStateToProps = (state) =>{
  return {
    text:state.text 
  }
}

const mapDispachToProps = (dispach) =>{
  return {
    Press1 : () => dispach({type:'press1'}) ,
    Press2 : () => dispach({type:'press2'})
  }
}

export default connect ( mapStateToProps , mapDispachToProps)(withRouter(PersonList));

