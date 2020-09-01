import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
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

    axios.post(`http://localhost:8000/reserve`,  user )
      .then(res => {
        this.setState({ data: res.data});
      })
  }

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
      <div className="card-body text-center">
        <h5 className="card-title">Owner resturant</h5>
        <h6 className="card-subtitle mb-2 text-muted">please type your table and chairs</h6>

            <form onSubmit={this.handleSubmit}>
            <h6 className="card-title">Table</h6>
             <input type="text" name="name" onChange={this.handleChange} />
           <br/>

           <h6 className="card-title mt-2">Chair</h6>
             <input type="text" name="name" onChange={this.handleChange2} /><br/>
             <a className="mt-3">{this.state.data}</a><br/>
           <button type="submit" className="btn btn-info mt-3">Add</button>
         </form>
      </div>
    </div>

    )
  }
}
