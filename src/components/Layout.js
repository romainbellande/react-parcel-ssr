import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import Reboot from 'material-ui/Reboot';
import Grid from 'material-ui/Grid'
import AppBar from './AppBar'

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: '960px',
    margin: '30px auto',
    fontFamily: '\'Open Sans\', sans-serif',
  },
  paper: {
    padding: '2em'
  }
}

class Layout extends React.Component {
  render() {
    let { classes, children } = this.props;

    return(
      <div>
        <AppBar />
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper 
                className={classes.paper}
              >
                {children}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(Layout));