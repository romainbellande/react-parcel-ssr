import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme();

const styles = theme => ({
  '@global': {
    html: {
      background: '#ffffff',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      color: '#555'
    }
  }
})

let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Reboot />
        <AppWrapper>
         <Component {...props} />
        </AppWrapper>
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;