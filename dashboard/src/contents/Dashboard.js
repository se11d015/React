import React, {Component} from "react";
import {Grid, Row, Col, Button, Table} from "react-bootstrap"
import Card from "../components/Cards/Card";
import ProfileImage from "../assets/img/faces/face-0.jpg";



// Sub componentuud oruulj irj baigaa heseg
import QuickDraft from "../components/SubContents/QuickDraft";
import Glance from "../components/SubContents/Glance";



// Minii oruulsan style
import "../assets/css/my-style.css";

class Dashboard extends Component {
  render(){
    return(
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h3>Dashboard</h3>
            </Col>
          <QuickDraft/>
          <Glance/>
              <Col md={6}>
                <Card
                  header=""
                  title="Activity"
                  category="Comments"
                  content={
                    <div className="table-full-width table-comments">
                      <Table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <img src= {ProfileImage} alt=""/>
                            </td>
                            <td>
                              Sign contract for "What are conference organizers afraid of?"
                            </td>
                            <td>
                              <Button type="button" rel="tooltip" title="Reply to Comment" className="btn btn-success btn-simple btn-xs">
                                <i className="fa fa-reply"/>
                              </Button>
                              <Button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                <i className="fa fa-edit"/>
                              </Button>
                              <Button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                <i className="fa fa-times"/>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src= {ProfileImage} alt=""/>
                            </td>
                            <td>
                              Sign contract for "What are conference organizers afraid of?"
                            </td>
                            <td>
                              <Button type="button" rel="tooltip" title="Reply to Comment" className="btn btn-success btn-simple btn-xs">
                                <i className="fa fa-reply"/>
                              </Button>
                              <Button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                <i className="fa fa-edit"/>
                              </Button>
                              <Button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                <i className="fa fa-times"/>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src= {ProfileImage} alt=""/>
                            </td>
                            <td>
                              Sign contract for "What are conference organizers afraid of?"
                            </td>
                            <td>
                              <Button type="button" rel="tooltip" title="Reply to Comment" className="btn btn-success btn-simple btn-xs">
                                <i className="fa fa-reply"/>
                              </Button>
                              <Button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                <i className="fa fa-edit"/>
                              </Button>
                              <Button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                <i className="fa fa-times"/>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <Col md={12}>
                      <div className="footer">
                        <hr/>
                        <div className="stats">
                            <a href="">All</a>|
                            <a href="">Pending (0)</a>|
                            <a href="">Approved (23)</a>|
                            <a href="">Spam (23,299)</a>
                        </div>
                      </div>
                      </Col>
                    </div>
                  }
                />
              </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Dashboard;
