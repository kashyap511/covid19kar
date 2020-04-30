import React, { Component } from 'react';
import classes from './Loader.module.scss';
import configs from 'assets/configs/config.json';

export default class Loader extends Component {
    render() {
        return (
            <div className={classes.loader}>
                <div className={classes.text1}>
                    {configs.stayHome}
                    <div className={classes.text2}>
                        {configs.staySafe}
                    </div>
                </div>
                <p>&copy; No rights 
                    <span role="img" aria-label="smile">
                        &#128522;
                    </span>
                </p>
            </div>
        )
    }
} 