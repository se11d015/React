import React, {Component} from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
class PersonSearch extends Component {
	constructor() {
		super();
		this.state = {
			search: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({search: event.target.value});
	}

	handleSubmit(event) {
		this.props.onSearchPerson({search: this.state.search});
	}

	render() {
		return (
			<Form inline>
				<FormGroup>
				<FormControl type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search here"/>
				<Button className="btn-fill" onClick={this.handleSubmit}>Search</Button>
				</FormGroup>
			</Form>
		)
	}
}

export default PersonSearch;