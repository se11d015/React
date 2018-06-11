import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import childRoute from "../../routes/childRoute";



class Sidebar extends Component {

	render() {
		return (
			<div
				className="sidebar"
				data-color="black"
				>
				<div className="sidebar-wrapper">

				<ul className="nav">
					{childRoute.map((prop, key) => {
						if (!prop.redirect)
							return (
								<li key={key}>
									<NavLink to={prop.path}>
										<i className={prop.icon}/>
										<p>{prop.name}</p>
									</NavLink>
								</li>
							);
							return null;
					})}
				</ul>
				</div>
			</div>
		)
	}
}

export default Sidebar;
