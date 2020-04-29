import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./App.module.scss";
import Routes from "components/Routes/Routes";
import AppBar from 'components/AppBar/AppBar';
import AlertDialog from "components/AlertDialog/AlertDialog";
import Loader from "components/Loader/Loader";
import configs from 'assets/configs/config.json';
class App extends Component {

	state = {
		isLoaderOn: true
	}
	render() {
		setTimeout(() => {this.setState({isLoaderOn: false})}, 6000);
		return (
			<Router>
				<div>
					{this.state.isLoaderOn && <Loader />}
					{!this.state.isLoaderOn && <div className={classes.main}>
						<AppBar />
						<AlertDialog />
						<Routes />
						<p className={classes.footer}>{configs.stayHome + ' ' + configs.staySafe}</p>
					</div>}
				</div>
			</Router>
		);
	}
}
export default App;
