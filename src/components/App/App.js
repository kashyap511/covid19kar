import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./App.module.scss";
import Routes from "components/Routes/Routes";
import AppBar from 'components/AppBar/AppBar';
import AlertDialog from "components/AlertDialog/AlertDialog";
class App extends Component {

	render() {
		return (
			<Router>
				<div className={classes.main}>
					<AppBar />
					<AlertDialog/>
					<Routes />
					<p className={classes.footer}>&copy; SLU</p>
				</div>
			</Router>
		);
	}
}


export default App;
