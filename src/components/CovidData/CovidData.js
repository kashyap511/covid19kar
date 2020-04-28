import React, { Component } from "react";
import axios from 'axios';
import classes from './CovidData.module.scss';
import Row from './Row/Row';
import configs from 'assets/configs/config.json';
import { LinearProgress } from "@material-ui/core";
import Search from 'ui/Search/Search';
import * as actions from 'store/actions';
import { connect } from "react-redux";
import { ERROR_PAGE } from "assets/constants/routes";

function createData(name, active, confirmed, deceased, recovered) {
    return { name, active, confirmed, deceased, recovered };
}

class CovidData extends Component {

    state = {
        allStates: [],
        covidState: [],
        loading: false
    }

    districtData = {};

    componentDidMount() {
        this.setState({ ...this.state, loading: true });
        this.getDistrictWiseData();
    }


    async getDistrictWiseData() {
        try {
            const [response] = await Promise.all([axios.get(configs.api.getDistrictWiseData)]);
            axios.get(configs.api.getDistrictWiseData)
            const allStates = Object.keys(response.data);
            this.setState({ ...this.state, allStates });
            this.districtData = { ...response.data };
            const districtData = response.data.Karnataka.districtData;
            const rows = [];
            for (let data in districtData) {
                const d = districtData[data];
                rows.push(createData(data, d.active, d.confirmed, d.deceased, d.recovered));
            }
            setTimeout(() => {
                this.setState({
                    ...this.state,
                    covidState: [...rows.sort((a, b) => b.confirmed - a.confirmed)],
                    loading: false
                });
            }, 1000);
        }
        catch (e) {
            this.props.history.push(ERROR_PAGE);
        }
    }
    onStateSelection(state) {
        this.setState({ ...this.state, loading: true });
        if (state) {
            if (this.districtData && this.districtData[state]) {
                this.props.setSelectedState(state);
                const districtData = this.districtData[state].districtData;
                const rows = [];
                for (let data in districtData) {
                    const d = districtData[data];
                    rows.push(createData(data, d.active, d.confirmed, d.deceased, d.recovered));
                }
                setTimeout(() => {
                    this.setState({
                        ...this.state,
                        covidState: [...rows.sort((a, b) => b.confirmed - a.confirmed)],
                        loading: false
                    });
                }, 1000);
            }
        }
    }

    render() {
        let allRows = this.state.covidState.map((dist, key) => (
            <Row dist={dist} key={key} />
        ));
        let header = {
            name: 'District',
            confirmed: 'T',
            recovered: 'R',
            deceased: 'D',
            active: 'A'
        }

        let progressBar = '';
        if (this.state.loading) {
            progressBar = <LinearProgress />
        }
        return (
            <div className={classes.main}>
                <div className={classes.searchBar}>
                    <Search label="Select state" options={this.state.allStates} onChange={(s) => this.onStateSelection(s)} />
                </div>
                <Row header="true" dist={header} />
                {progressBar}
                {allRows}
                <div className={classes.bulletsSection}>
                    <div className={classes.bullets}>
                        T - Total
                    </div>
                    <div className={classes.bullets}>
                        R - Recovered
                    </div>
                    <div className={classes.bullets}>
                        D - Deceased
                    </div>
                    <div className={classes.bullets}>
                        A - Active
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedState: selectedState => dispatch(actions.setSelectedState(selectedState))
    }
}
export default connect(null, mapDispatchToProps)(CovidData);