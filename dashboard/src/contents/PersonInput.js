import React, {Component} from "react";
import axios from "axios";

class PersonInput extends Component {
  state = {
    name: "",
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

// Shine user uusgeh
    const user = {
      name: this.state.name,
    }
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user }).then(response => {
      console.log(response);
      console.log(response.data);
    });
  }

  render(){
    return(
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default PersonInput;
