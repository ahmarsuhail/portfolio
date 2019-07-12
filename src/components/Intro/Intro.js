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
        
        <div class="intro">
            
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12}><div class="landing-page"><h2 class="landing-heading">{text.landingPage}</h2></div></Grid>
             </Grid>

            <div class="intro-box">
                <div class="intro-content">
                        About Me
                        
                        <p>{text.introBegin}</p>
                        <p>{text.introTwo}</p>
                        <p>{text.introThree}</p>
                </div>
            </div>

            <div class="buttons buttons-medium">
            <Grid container direction="row" justify="space-between" alignItems="center">

                <Grid item xs={1}></Grid>
                
                <Grid item xs={2}>
                    
                    <Link to="/resume" style={linkStyle}>
                    <div class="button"> 
                         Resume 
                         </div> 
                    </Link>
                   
                </Grid>
           

                <Grid item xs={2}>
                <Link to="/contact" style={linkStyle}>
                    <div class="button">
                        Contact
                    </div>
                </Link>   
                </Grid>


                <Grid item xs={2}>
                <Link to="/articles" style={linkStyle}>
                    <div class="button">
                        Articles
                    </div>
                </Link>
                </Grid>

                <Grid item xs={1}></Grid>
            </Grid>
            </div>

            <div class="buttons-small buttons">
     
            <Grid container direction="row" justify="space-between" alignItems="center">            
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>    
                    <Link to="/resume" style={linkStyle}>
                    <div class="button"> 
                         Resume 
                         </div> 
                    </Link>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                <Link to="/contact" style={linkStyle}>
                    <div class="button">
                        Contact
                    </div>
                </Link>   
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                <Link to="/articles" style={linkStyle}>
                    <div class="button">
                        Articles
                    </div>
                </Link>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            
            </div>

        </div>
    )

}

export default Intro;