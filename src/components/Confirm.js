import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" style={{ background: "#2E3B55" }} />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            ></ListItem>
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            ></ListItem>
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            ></ListItem>
            <ListItem primaryText="City" secondaryText={city}></ListItem>
            <ListItem primaryText="Bio" secondaryText={bio}></ListItem>
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary="false"
            style={styles.button}
            onClick={this.back}
          ></RaisedButton>
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

export default Confirm;
