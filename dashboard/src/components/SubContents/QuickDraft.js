import React, {Component} from "react";
import {Row, Col, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"
import Card from "../Cards/Card";

class QuickDraft extends Component {
  render() {
    return(
      <Col md={6}>
        <Card
          header="Header"
          title="Quick Draft"
          content={
            <form>
              <Row>
              <Col md={12}>
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                placeholder="Here you can write your title"
              />
              </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col md={12}>
              <FormGroup>
                <ControlLabel>Whats on your mind</ControlLabel>
              <FormControl
                componentClass="textarea"
                rows={5}
                placeholder="Here can be your description"
              />
              </FormGroup>
              </Col>
              </Row>
              <Button type="submit" bsStyle="info" className="btn-fill pull-right">Save Draft</Button>
              <div className="clearfix"></div>
            </form>
          }
        />
      </Col>
    )
  }
}


export default QuickDraft;
