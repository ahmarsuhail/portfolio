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
                    <Grid container direction="row" justify="center" alignItems="flex-start">
                        <Grid item xs={12}><div class="resume-heading"><h2>{text.articleHeading}</h2></div></Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div>{text.articles.map((x) => <a href={x.linkURL} target="_blank"><div class="article-links">{x.linkName}</div></a>)}</div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default Article;
