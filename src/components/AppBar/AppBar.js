import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import classes from './AppBar.module.scss';
import { connect } from 'react-redux';
import logo from 'assets/images/stats.png';
import configs from 'assets/configs/config.json';
import * as actions from 'store/actions';

class HeaderBar extends Component {

    render() {
        return (
            <div>
                <header className={classes.root}>
                    <img onClick={() => this.props.setShowDialog(!this.props.showDialog)} className={classes.img} alt="Covid logo" src={logo}></img>
                    <Typography variant="h6" className={classes.title}>
                        {configs.header}
                        <div className={classes.state}>{this.props.selectedState}</div>
                    </Typography>
                </header>
            </div>
        );
    }
}
const mapStateToProps = (store) => ({
    selectedState: store.covidReducer.selectedState,
    showDialog: store.covidReducer.showDialog
});
const mapDispatchToProps = (dispatch) => ({
    setShowDialog: showDialog => dispatch(actions.setShowDialog(showDialog))
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
