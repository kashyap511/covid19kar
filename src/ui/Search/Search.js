import React, { Component } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';


class Search extends Component {

    render() {

        debugger;
        return <Autocomplete
                    id="combo-box-demo"
                    options={this.props.options}
                    getOptionLabel={(option) => option}
                    onChange={(e, v) => this.props.onChange(v)}
                    renderOption={(option) => (
                        <div>
                            {option}
                        </div>
                    )}
                    renderInput={(params) => <TextField {...params} label={this.props.label} variant="outlined" />}
                />
    }
}
export default Search;