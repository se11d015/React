import React, {Component} from "react";
import {Grid, Row, Col, Table} from "react-bootstrap"


const student = [
  {
    id: 1,
    name: "Tsend",
    code: "SE11D015",
    class: "Software Engineer",
    phone: 99321221
  },
  {
    id: 2,
    name: "Sanjaa",
    code: "IS082112",
    class: "Information System",
    phone: 88210287
  },
  {
    id: 3,
    name: "Galt",
    code: "SW02D021",
    class: "Software Engineer",
    phone: 99110102
  },
  {
    id: 4,
    name: "Baldka",
    code: "SA22D091",
    class: "System Administration",
    phone: 77079121
  },
  {
    id: 5,
    name: "Tsetsenhuu",
    code: "BA00D120",
    class: "Business Administration",
    phone: 89122175
  },
  {
    id: 6,
    name: "Onon",
    code: "IS11D011",
    class: "Information System",
    phone: 99321221
  }
];

class StudentList extends Component {
  render() {
    return(
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h3>Students</h3>
            </Col>
          </Row>
          <Col md={12}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Class</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {student.map((prop, key) => {
                  return(
                  <tr key={key}>
                    <td>{prop.id}</td>
                    <td>{prop.name}</td>
                    <td>{prop.code}</td>
                    <td>{prop.class}</td>
                    <td>{prop.phone}</td>
                  </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Grid>
      </div>
    )
  }
}

export default StudentList;
