import React from "react"
import LogIn from "./pages/logIn/LogIn"
import { Box } from "@material-ui/core"
import VerticalNav from "./pages/dashboard/verticalNav/VerticalNav"
import CalenderPage from "./pages/dashboard/calender/CalenderPage"
import Subjects from "./pages/dashboard/subjects/SubjectsPage"
import ProfilePage from "./pages/dashboard/profile/ProfilePage"
import { logInInit } from "./initData"
import CourseGrades from "./pages/GradePage/CourseGrades"
import SelectStudent from "./pages/AdminPages/SelectStudent"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      LogInNo: 0,
      pageID: 0,
      student: null,
    }
  }

  handleStudent(inp) {
    this.setState({
      student: inp,
    })
  }

  initData() {
    let item = localStorage.getItem("userTable")
    // if (item === null) {
    localStorage.clear()
    localStorage.setItem("userTable", JSON.stringify(logInInit))
    // }
  }

  componentDidMount() {
    this.initData()
  }

  changePageID(choice) {
    this.setState(
      {
        pageID: choice,
      }
      // () => console.log(this.state.pageID)
    )
  }

  DisplayPage() {
    if (this.state.pageID === 0 && this.state.LogInNo === 1) {
      return (
        <CalenderPage
          changePageID={this.changePageID.bind(this)}
          student={this.state.student}
        />
      )
    } else if (this.state.pageID === 1 && this.state.LogInNo === 1) {
      return <Subjects student={this.state.student} />
    } else if (this.state.pageID === 0 && this.state.LogInNo === 2) {
      return <SelectStudent />
    } else if (this.state.pageID === 2) {
      return <CourseGrades student={this.state.student} />
    } else if (this.state.pageID === 4) {
      return <ProfilePage student={this.state.student} />
    }
  }

  LogInCheck(num) {
    this.setState({
      LogInNo: num,
    })
  }
  render() {
    if (this.state.LogInNo === 0) {
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
          {/* <a href={Pdf} target='_blank'>Test</a> */}
          <LogIn
            LogInCheck={this.LogInCheck.bind(this)}
            handleStudent={this.handleStudent.bind(this)}
          />
        </Box>
      )
    } else if (this.state.LogInNo === 1) {
      return (
        <Box
          id="Root"
          style={{
            height: "100%",
            backgroundColor: "#DCDCDC",
          }}
        >
          <Box>
            <VerticalNav
              pageID={this.state.pageID}
              changePageID={this.changePageID.bind(this)}
              client="student"
              student={this.state.student}
              LogInCheck={this.LogInCheck.bind(this)}
            />
          </Box>
          <Box style={{ marginLeft: "109px", paddingTop: "119px" }}>
            {this.DisplayPage()}
          </Box>
        </Box>
      )
    } else if (this.state.LogInNo === 2) {
      return (
        <Box
          id="Root"
          style={{
            height: "100%",
            backgroundColor: "#DCDCDC",
          }}
        >
          <Box>
            <VerticalNav
              pageID={0}
              changePageID={this.changePageID.bind(this)}
              client="admin"
              student={this.state.student}
              LogInCheck={this.LogInCheck.bind(this)}
            />
          </Box>
          <Box style={{ marginLeft: "109px", paddingTop: "119px" }}>
            {this.DisplayPage()}
          </Box>
        </Box>
      )
    }
  }
}
