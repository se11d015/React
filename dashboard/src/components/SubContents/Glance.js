import React, {Component} from "react";
import { Row, Col} from "react-bootstrap"
import Card from "../Cards/Card";

class Glance extends Component {
  render(){
    return(
      <Col md={6} className="card-glance">
        <Card
          header=""
          title="At a Glance"
          content={
            <Row>
              <Col md={4}>
                <i className="pe-7s-note2"/>
                <a href=""><h5>25 Posts</h5></a>
              </Col>
              <Col md={4}>
                <i className="pe-7s-comment"/>
                <a href=""><h5>74 Comments</h5></a>
              </Col>
              <Col md={4}>
                <i className="pe-7s-copy-file"/>
                <a href=""><h5>1 Page</h5></a>
              </Col>
              <Col md={12}>
                <footer>
                  <hr/>
                  WordPress 4.1.4 running Duzzle Theme
                </footer>
              </Col>
            </Row>
          }
        />
      </Col>
    )
  }
}

export default Glance;
