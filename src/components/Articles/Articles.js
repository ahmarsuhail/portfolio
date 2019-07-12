import React, { Component } from 'react';
import text from './text.json';
import Grid from '@material-ui/core/Grid';  
import styles from './styles.css';

class Article extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="contact-form">
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12}>
                            <div class="contact-heading"><h2>{text.progress}</h2></div>
                        </Grid>
                    </Grid>
            </div>        
        )
    }
}


export default Article;
