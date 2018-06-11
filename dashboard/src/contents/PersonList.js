import React, {Component} from "react";
import axios from "axios";
import { Grid, Col, Table } from "react-bootstrap";
import AddPerson from "../contents/AddPerson";
import UpdatePerson from "../contents/UpdatePerson";
import Card from "../components/Cards/Card";

// import PersonInput from "../contents/PersonInput";

class PersonList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      persons: [],
    }
    this.addPerson = this.addPerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
  }

  // componentDidMount () {
  //   this.fetchData();
  // }
  //
  // fetchData() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
  //     this.setState({ persons: response.data });
  //   });
  // }
  //
  //
  //
  // deleteUser(id) {
  //   if(window.confirm("Are you sure?")){
  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => {
  //       console.log(response.data);
  //       this.fetchData();
  //   });
  //  }
  // }

  componentDidMount () {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
      this.setState({ persons: response.data });
    });
  }

  deletePerson = (index, e) => {
    if (window.confirm("Are you sure")) {
    var users = Object.assign([], this.state.persons);
    users.splice(index, 1);
    this.setState({persons: users});
    }
  }

  addPerson(user) {
    var users = this.state.persons;
    users.push(user);
    this.setState({persons: users});
  }

  updatePerson(index, user){
    var users = this.state.persons;
    users[index] = user
    this.setState({persons: users});
  }

  render(){
    return(
      <div className="content">
        <Grid fluid>
          <Col md={12}>

            <Card
              header="Header"
              title="Persons"
              content={
                <div>
                <Table >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Userame</th>
                      <th>Email</th>
                      <th>
                        <AddPerson onInsertPerson={(user) => this.addPerson(user)} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.persons.map((person, index) => {
                      return(
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{person.name}</td>
                          <td>{person.username}</td>
                          <td>{person.email}</td>
                          <td><button onClick={this.deletePerson.bind(this, index)}>Delete</button></td>
                          <td><UpdatePerson person={person} onUpdatePerson={(user) => this.updatePerson(index, user)} /></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </div>
               }
            />
            </Col>
          </Grid>
        </div>
      )
    }
  }

export default PersonList;
