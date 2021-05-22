import React, { Component } from 'react';
import classes from './Loader.module.scss';
import configs from 'assets/configs/config.json';

export default class Loader extends Component {
    render() {
        return (
            <div className={classes.loader}>
                <div className={classes.title}>Welcome 
                    <div className={classes.subtitle}>Mr. Umeshchandra Shastri</div>
                </div>
                <div className={classes.text1}>
                    {configs.stayHome + ' ' + configs.staySafe}
                    <div className={classes.text2}>
                        Get vaccinated
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