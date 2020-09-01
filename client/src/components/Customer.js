import React from 'react';
import axios from 'axios';
export default class PersonList extends React.Component {
  state = {
    Customer: '',
    data: ''
 
  }

  handleChange = event => {
    this.setState({ Customer: event.target.value });
 
  }



  handleSubmit = event => {
    event.preventDefault();

    const user = {
        Customer: this.state.Customer 
    };

    axios.post(`http://localhost:8000/reserve2`,  user )
      .then(res => {
        this.setState({ data: res.data});
      })
  }

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
      <div className="card-body text-center">
        <h5 className="card-title">Customer</h5>
        <h6 className="card-subtitle mb-2 text-muted">please type your customers</h6>

            <form onSubmit={this.handleSubmit}>
            <h6 className="card-title">Customer</h6>
             <input type="text" name="name" onChange={this.handleChange} />
           <br/>


             <a className="mt-3">{this.state.data}</a><br/><br/>
           <button type="submit" className="btn btn-info mt-3">Add</button>
         </form>
      </div>
    </div>
    )
  }
}
