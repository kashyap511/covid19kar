import React, { Component } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import classes from './Search.module.scss';


class Search extends Component {

    render() {

        return <Autocomplete
                    id="combo-box-demo"
                    options={this.props.options}
                    blurOnSelect
                    getOptionLabel={(option) => option}
                    onChange={(e, v) => this.props.onChange(v)}
                    renderOption={(option) => (
                        <div>
                            {option}
                        </div>
                    )}
                    renderInput={(params) => <TextField className={classes.input} {...params} label={this.props.label} />}
                />
    }
}
export default Search;