import React, {Component} from "react";
import {Modal, Button, ButtonToolbar, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

class AddPerson extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      name: "",
      username: "",
      email: ""
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleChangeText(event, name) {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.onInsertPerson({name: this.state.name, username: this.state.username, email: this.state.email});
    this.setState({ show: false });
  }

  render(){
    return(
      <ButtonToolbar>
        <Button bsStyle="info" className="btn-fill" onClick={this.handleShow}>
          Add
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Add New Person
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" onChange={(e) => this.handleChangeText(e, "name")} placeholder="Name..." />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl type="text" onChange={(e) => this.handleChangeText(e, "username")} placeholder="Username..." />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl type="text" onChange={(e) => this.handleChangeText(e, "email")} placeholder="Email..." />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" bsStyle="info" className="btn-fill" onClick={this.handleSubmit}>Save</Button>
            <Button bsStyle="info" className="btn-fill" onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default AddPerson;
