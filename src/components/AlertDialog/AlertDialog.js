import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import configs from 'assets/configs/config.json';
import classes from './AlertDialog.module.scss';
import { fNum } from '../../utils/common-functions';
import { connect } from 'react-redux';
import * as actions from 'store/actions';


class AlertDialog extends Component {

    state = {
        data: {
            active: '',
            confirmed: '',
            deaths: '',
            deltaconfirmed: '',
            deltadeaths: '',
            deltarecovered: '',
            lastupdatedtime: '',
            recovered: ''
        }
    };

    componentDidMount() {
        axios.get(configs.api.getAllData)
            .then((response) => {
                const data = response.data.statewise[0];
                this.setState({ ...this.state, data});
                this.props.setShowDialog(true);
            });
    }


    render() {
        return (
            <div>
                <Dialog
                    open={this.props.isDialogOpen}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Cases across India"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <span className={classes.label}>
                                Active: <span className={classes.count}>{fNum(this.state.data.active)} </span><br />
                            </span>
                            <span className={classes.label}>
                                Confirmed:
                                <span className={classes.count}>
                                    {fNum(this.state.data.confirmed) + ' '}
                                    <span className={classes.delta}>(+{fNum(this.state.data.deltaconfirmed)})</span>
                                </span><br />
                            </span>
                            <span className={classes.label}>
                                Recovered:
                                <span className={classes.count}>
                                    {fNum(this.state.data.recovered) + ' '}
                                    <span className={classes.deltaGreen}>(+{fNum(this.state.data.deltarecovered)})</span>
                                </span><br />
                            </span>
                            <span className={classes.label}>
                                Deaths:
                                <span className={classes.count}>
                                    {fNum(this.state.data.deaths) + ' '}
                                    <span className={classes.delta}>(+{fNum(this.state.data.deltadeaths)})</span><br />
                                </span>
                            </span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.setShowDialog(!this.props.isDialogOpen)} color="primary" autoFocus>
                            Close
                </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
const mapStateToProps = (store) => ({
    isDialogOpen: store.covidReducer.showDialog
});
const mapDispatchToProps = (dispatch) => ({
    setShowDialog: showDialog => dispatch(actions.setShowDialog(showDialog))
});
export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);