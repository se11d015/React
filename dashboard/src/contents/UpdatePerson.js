import React, {Component} from "react";
import {Modal, Button, ButtonToolbar, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

class UpdatePerson extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      name: this.props.person.name,
      username: this.props.person.username,
      email: this.props.person.email
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
    this.props.onUpdatePerson({name: this.state.name, username: this.state.username, email: this.state.email});
    this.setState({ show: false });
  }

  render(){
    return(
      <ButtonToolbar>
        <Button className="btn btn-success btn-simple btn-xs">
          <span onClick={this.handleShow} className="fa fa-edit"></span>
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Update the Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl value={this.state.name} type="text" onChange={(e) => this.handleChangeText(e, "name")} placeholder="Name..." />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl value={this.state.username} type="text" onChange={(e) => this.handleChangeText(e, "username")} placeholder="Username..." />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl value={this.state.email} type="text" onChange={(e) => this.handleChangeText(e, "email")} placeholder="Email..." />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="btn-fill" onClick={this.handleSubmit}>Save</Button>
            <Button className="btn-fill" onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default UpdatePerson;
