import React, {Component} from "react";
import axios from "axios";
import { Grid, Col, Table, Button } from "react-bootstrap";
import AddPerson from "../contents/AddPerson";
import UpdatePerson from "../contents/UpdatePerson";
import PersonSearch from "../contents/PersonSearch";
import Card from "../components/Cards/Card";


class PersonList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      persons: [],
      direction: {
        name: "asc",
      }
    }
    this.addPerson = this.addPerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
    this.filteredPerson = this.filteredPerson.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  // componentDidMount () {
  //   this.fetchData();
  // }

  // fetchData() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
  //     this.setState({ persons: response.data });
  //   });
  // }



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
      console.log(response.data);
    });
  }

  deletePerson = (index, element) => {
    if (window.confirm("Are you sure")) {
    var person = this.state.persons;
    person.splice(index, 1);
    this.setState({persons: person});
    }
  }

  addPerson(element) {
    var person = this.state.persons;
    person.push(element);
    this.setState({persons: person});
  }

  updatePerson(index, element) {
    var users = this.state.persons;
    users[index] = element
    this.setState({persons: users});
  }

  filteredPerson(element) {
    var filtered = this.state.persons.filter(
      (person) => {
        return person.name.indexOf(element.search) !== -1 ||
               person.username.indexOf(element.search) !== -1;

      }
      );
    this.setState({persons: filtered});
    console.log(filtered);
  }

  sortBy(key) {
    console.log(key);
    var newArray = [].concat(this.state.persons).sort((a, b) => (
      this.state.direction[key] === "asc" ? a[key] > b[key] : a[key] < b[key]
    ));
    this.setState({persons: newArray});
  }

  render(){
    return(
      <div className="content">
        <Grid fluid>
          <Col md={12}>
            <Card
              header="Header"
              title="Tutors"
              content={
                <div>
                <Col md={12}>
                <PersonSearch onSearchPerson={(e) => this.filteredPerson(e)} />
                <AddPerson onInsertPerson={(user) => this.addPerson(user)} />
                </Col>
                <Table >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>
                        Name
                        <button className="btn-simple btn-xs">
                          <span className="caret" onClick={() => this.sortBy("name")}></span>
                        </button>
                      </th>
                      <th>
                        User Name
                        <button className="btn-simple btn-xs">
                          <span className="caret" onClick={() => this.sortBy("username")}></span>
                        </button>
                      </th>
                      <th>
                        Email
                        <button className="btn-simple btn-xs">
                          <span className="caret" onClick={() => this.sortBy("email")}></span>
                        </button>
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
                          <td>
                            <Button className="btn btn-danger btn-simple btn-xs">
                              <span onClick={this.deletePerson} className="fa fa-times">
                              </span>
                            </Button>
                          </td>
                          <td>
                            <UpdatePerson person={person} onUpdatePerson={(user) => this.updatePerson(index, user)} />
                          </td>
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
