import React from 'react';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import Intro from '../Intro/Intro';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Grid container spacing={0}>
      <Header />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10}>
           <Router>
             <Switch>
             <Route path="/" exact component={Intro} />
             <Route path="/resume" component={Resume} />
             <Route path="/contact" component={Contact} />
             <Route path="/articles" component={Articles} />
             </Switch>
           </Router>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
