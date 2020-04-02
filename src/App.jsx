import React from "react";
import LogIn from "./pages/logIn/LogIn";
import { Box } from "@material-ui/core";
import VerticalNav from "./pages/dashboard/verticalNav/VerticalNav";
import CalenderPaje from "./pages/dashboard/calender/CalenderPaje";
import Subjects from "./pages/dashboard/subjects/SubjectsPage";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      LogIn: true,
      pageID: 1
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

  DisplayPage() {
    if (this.state.pageID === 0) {
      return <CalenderPaje />;
    } else if (this.state.pageID === 1) {
      return <Subjects />;
    }
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
            margin: "0px",
          }}
        >
          <LogIn LogInCheck={this.LogInCheck.bind(this)} />
        </Box>
      );
    } else {
      return (
        <Box
        id="Root"
        style={{
          height:"100%",
          backgroundColor:"#DCDCDC"
        }}
        >
          <VerticalNav
            pageID={this.state.pageID}
            changePageID={this.changePageID.bind(this)}
          />
          <Box style={{marginLeft:"109px", marginTop:"115px"}} >
          {this.DisplayPage()}
          </Box>
        </Box>
      );
    }
  }
}
