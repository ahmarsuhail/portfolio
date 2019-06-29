import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function Header() {

    return (
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            My Website
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
    )
}

export default Header;