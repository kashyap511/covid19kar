import React, { Component } from "react";
import { Switch, Route } from "react-router";
import CovidData from "components/CovidData/CovidData";
import Error from 'components/Error/Error';
import * as ROUTES from "assets/constants/routes";

class Routes extends Component {
	state = {};

	render() {
		return <Switch>
			<Route path={ROUTES.COVID19KAR} exact component={CovidData} />
			<Route path={ROUTES.ERROR_PAGE} component={Error} />
			<Route component={CovidData} />
		</Switch>;
	}
}
export default Routes;
