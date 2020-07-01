import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // here we can process our form , if we need
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" style={{ background: "#2E3B55" }} />
          <h1>Thank You For Your Submission</h1>
          <p>You'll get an email with further instruction</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 18,
  },
};

export default Success;
