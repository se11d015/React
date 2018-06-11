import React, {Component} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// Contents hesguudiig dawtaltaar oruulj irne
import childRoute from "../routes/childRoute";


// Layout huudasnii 3 undsen bureldehuun heseg
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';




class Dashboard extends Component {
	render() {
		return(
			<div className="wrapper">
					<Sidebar/>
				<div id="main-panel" className="main-panel" ref="mainPanel">
					<Header/>
					<Switch>
						{childRoute.map((prop, key) => {
							if (prop.redirect)
								return(
								<Redirect from={prop.path} to={prop.to} key={key} />
							);
								return (
								<Route path={prop.path} component={prop.component} key={key} />
							);
						})}
					</Switch>
					<Footer/>
				</div>
			</div>
		)
	}
}

export default Dashboard;
