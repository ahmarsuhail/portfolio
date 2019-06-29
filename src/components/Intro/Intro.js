import React from 'react';
import styles from './styles.css'
import text from './text.json'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

function Intro() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#3f51b5' 
    }

    return (
        <div>
            <div class="intro-box">
                <div class="intro-content">
                    <Typography variant="h4" gutterBottom>
                        About Me
            </Typography>

                    <Typography variant="h6" gutterBottom>
                        <p>{text.introBegin}</p>
                        <p>{text.introEnd}</p>
                    </Typography>
                </div>
            </div>

            <div class="buttons">
            <Grid container direction="row" justify="space-between" alignItems="center">

                <Grid item xm={1}></Grid>
                
                <Grid item xs={3} xm={2}>
                    
                    <Link to="/resume" style={linkStyle}>
                    <div class="button"> 
                         Hello 
                         </div> 
                    </Link>
                   
                </Grid>
           

                <Grid item xs={3} xm={2}>
                    <div class="button">
                        Hello
                    </div>
                </Grid>


                <Grid item xs={3} xm={2}>
                    <div class="button">
                        Hello
                    </div>
                </Grid>

                <Grid item xm={1}></Grid>
            </Grid>
            </div>

        </div>
    )

}

export default Intro;