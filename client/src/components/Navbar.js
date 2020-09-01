import React from 'react';
import {Link } from 'react-router-dom';
import { Navbar , Nav ,NavDropdown , Form , FormControl , Button} from 'react-bootstrap';
export default class Navbar22 extends React.Component {
  state = {
    Tables: '',
    Chaires: '',
    data: ''
  }

  handleChange = event => {
    this.setState({ Tables: event.target.value });
  }

  handleChange2 = event => {
    this.setState({ Chaires: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
        Tables: this.state.Tables ,
        Chaires : this.state.Chaires
    };

  }

  render() {
     
    return (
<Navbar bg="light" expand="sm">
  <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav>
 <Nav.Link> <Link to="/Register">Register</Link></Nav.Link>
      <Nav.Link><Link to="/Login">Login</Link></Nav.Link>
    </Nav>
 

  </Navbar.Collapse>
</Navbar>
    )
  }
}
