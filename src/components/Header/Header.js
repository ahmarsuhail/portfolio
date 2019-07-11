import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './styles.css'


function Header() {

    return (
            <Grid item xs={12}>
                    <div class="header">
                    <Grid container direction="row" justify="flex-start" alignItems="center" className="header-content">
                        <Grid item xs={8}>
                        <div class="website-heading">//Hello, World!</div>
                        </Grid>
                        <Grid item xs={4}>
                        <div class="author-heading"><div class="author-name">@author: Ahmar Suhail</div></div>
                        </Grid>
                    </Grid> 
                 </div>
            </Grid>
    )
}

export default Header;