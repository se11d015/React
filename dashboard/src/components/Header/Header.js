import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Navbar fluid>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="">EasyA</a>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="">
							<i className="fa fa-refresh"/> 17
						</NavItem>
						<NavItem eventKey={2} href="">
							<i className="fa fa-comments-o"/> 0
						</NavItem>
						<NavItem eventKey={3} href="">
							<i className="fa fa-plus"/> New Post
						</NavItem>
						<NavItem eventKey={4} href="">
							SEO
						</NavItem>
					</Nav>
					<Nav pullRight>
						<NavDropdown eventKey={5} title="Hi there, Tsend" id="basic-nav-dropdown">
							<MenuItem eventKey={5.1}>My Profile</MenuItem>
							<MenuItem eventKey={5.2}>My Dashboard</MenuItem>
							<MenuItem eventKey={5.3}>My Report Card</MenuItem>
							<MenuItem eventKey={5.4}>Team Dashboard</MenuItem>
							<MenuItem eventKey={5.5}>Settings</MenuItem>
							<MenuItem divider/>
							<MenuItem eventKey={5.6}>Sign Out</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Header;
