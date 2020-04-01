import React from "react";
import LogIn from "./pages/logIn/LogIn";
import { Box } from "@material-ui/core";
import VerticalNav from "./pages/dashboard/verticalNav/VerticalNav";
import CalenderPaje from "./pages/dashboard/calender/CalenderPaje";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      LogIn: false,
      pageID: 0
    };
  }

  changePageID(choice) {
    this.setState(
      {
        pageID: choice
      },
      () => console.log(this.state.pageID)
    );
  }

  LogInCheck() {
    this.setState({
      LogIn: true
    });
  }
  render() {
    if (this.state.LogIn === false) {
      return (
        <Box
          id="Root"
          style={{
            width: "100%",
            height: "100%",
            padding: "0px",
            margin: "0px"
          }}
        >
          <LogIn LogInCheck={this.LogInCheck.bind(this)} />
        </Box>
      );
    } else {
      return (
        <Box>
          <VerticalNav
            pageID={this.state.pageID}
            changePageID={this.changePageID.bind(this)}
          />
          <CalenderPaje />
        </Box>
      );
    }
  }
}
