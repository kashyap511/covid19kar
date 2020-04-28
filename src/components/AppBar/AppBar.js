import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classes from './AppBar.module.scss';
import { connect } from 'react-redux';
import logo from 'assets/images/covidlogo.png';

class HeaderBar extends Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className={classes.root}>
                        <img className={classes.img} alt="Covid logo" src={logo}></img>
                        <Typography variant="h6" className={classes.title}>
                            Covid 19 Statistics
                            <div className={classes.state}>{this.props.selectedState}</div>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
const mapStateToProps = (store) => ({
    selectedState: store.covidReducer.selectedState
});
export default connect(mapStateToProps, null)(HeaderBar);
