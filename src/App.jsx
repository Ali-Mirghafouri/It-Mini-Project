import React from "react";
import LogIn from "./pages/logIn/LogIn";
import { Box } from "@material-ui/core";
import VerticalNav from "./pages/dashboard/verticalNav/VerticalNav";
import CalenderPaje from "./pages/dashboard/calender/CalenderPaje";
import Subjects from "./pages/dashboard/subjects/SubjectsPage";
import ProfilePage from "./pages/dashboard/profile/ProfilePage"
import {logInInit} from "./initData"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      LogIn: false,
      pageID: 4
    };
  }

initData(){
  const temp = []
  for (let i = 0; i < logInInit.length; i++) {
    temp.push({
      studentId: logInInit[i].studentId,
      password: logInInit[i].password
    })
  }
    localStorage.clear()
    localStorage.setItem("userTable", JSON.stringify(temp))
    console.log(localStorage.getItem("userTable"))
}


  componentDidMount() {
    this.initData()
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
      return <CalenderPaje changePageID={this.changePageID.bind(this)} />;
    } else if (this.state.pageID === 1) {
      return <Subjects />;
    } else if (this.state.pageID === 4) {
      return <ProfilePage />;
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
          <Box>
          <VerticalNav
            pageID={this.state.pageID}
            changePageID={this.changePageID.bind(this)}
          />
          </Box>
          <Box style={{marginLeft:"109px",paddingTop:"119px" }} >
          {this.DisplayPage()}
          </Box>
        </Box>
      );
    }
  }
}
