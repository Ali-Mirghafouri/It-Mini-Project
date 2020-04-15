import React from "react"
import bg from "../../assets/bg.png"
import { Box, Typography } from "@material-ui/core"
import Input from "../../componants/Input"
import Button from "../../componants/Button"
import { EmailLogo, PasswordLogo } from "../../assets/icons"
import HelpLogo from "../../assets/HelpLogo.png"
import { Students } from "../../initData"
import Alert from "@material-ui/lab/Alert"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import { logInInit } from "../../initData"

// w is for the width
// h is for height
// mb is for margin bottom
// ph is for placeholder
// fsize is for Font Size
// Licon is the left icon
// type is for type

export default class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: JSON.parse(localStorage.getItem("userTable")),
      SID: null,
      pass: null,
      Emailerr: false,
      Passerr: false,
    }
    this.Students =[]
  }

  findStudent(id) {
    for (let i = 0; i < Students.length; i++) {
      if (Students[i].ID === id) {
        return Students[i]
      }
    }
  }

  componentDidMount(){
    this.initData()
  }
  initData() {
    // localStorage.clear()
    let item = localStorage.getItem("userTable")
    if (item === null) {
      localStorage.clear()
      localStorage.setItem("userTable", JSON.stringify(logInInit))
    } else {
      // console.log("twee")
      for (var a in localStorage) {
        if (a.substr(0, 5) === "stude") {
          if (a !== "studentbadmin" && a !== "userTable") {
            this.Students.push(JSON.parse(localStorage[a]))
          }
        }
      }
    }
    const temp = JSON.parse(localStorage.getItem("userTable"))

    let student = "Student"


    for (let i = 0; i < temp.length; i++) {
      student = "studentb" + temp[i].studentId
      let item = JSON.parse(localStorage.getItem(student))
      if (item === null) {
        localStorage.setItem(student, JSON.stringify(this.findStudent(temp[i].studentId)))
      }
    }

  }

  handleEmailerr() {
    if (this.state.Emailerr === true) {
      this.setState({
        Emailerr: false,
      })
    } else {
      this.setState({
        Emailerr: true,
      })
    }
  }

  handlePasserr() {
    if (this.state.Passerr === true) {
      this.setState({
        Passerr: false,
      })
    } else {
      this.setState({
        Passerr: true,
      })
    }
  }

  handleSID(event) {
    let inp = event.target.value
    // inp = "admin" //DELETE THIS LINE
    this.setState({
      SID: inp,
    })
  }

  handlePass(event) {
    let inp = event.target.value
    // inp = "admin" //DELETE THIS LINE
    this.setState({
      pass: inp,
    })
  }

  checkPass() {
    let student = "Student"
    let id = ""
    const temp = JSON.parse(localStorage.getItem("userTable"))

    for (let i = 0; i < temp.length; i++) {
      if (
        temp[i].studentId === this.state.SID.toLowerCase() &&
        temp[i].password === this.state.pass
      ) {
        student = "studentb" + temp[i].studentId
        this.props.handleStudent(student)
        if ("admin" === this.state.SID.toLowerCase()) {
          this.props.LogInCheck(2)
        } else {
          this.props.LogInCheck(1)
        }
      } else {
        if (temp[i].studentId === this.state.SID.toLowerCase()) {
          id = true
          this.setState({
            Emailerr: false,
          })
        }
        if (temp[i].password !== this.state.pass && id === true) {
          this.handlePasserr()
        }
      }
    }

    if (id !== true) {
      console.log(id)
      this.handleEmailerr()
    }
  }

  render() {
    return (
      <Box
        style={{
          width: "100%",
          height: "200%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {this.initData()}
        <Box
          style={{
            width: "100%",
            height: "145.7%",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "0px",
            margin: "0px",
            position: "absolute",
          }}
        >
          <Box
            id="loginMainBody"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: "54%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "505px",
            height: "508px",
          }}
        >
          <Box
            style={{
              zIndex: "100",
              display: "grid",
              alignContent: "start",
              justifyItems: "center",
              marginTop: "400px",
            }}
          >
            <Box
              style={{
                width: "600px",
                height: "300px",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${HelpLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </Box>
            <Input
              w="505px"
              h="105px"
              mb="16px"
              ph="Student ID"
              fsize="35px"
              Licon={<EmailLogo />}
              value="b1801867"
              handleSID={this.handleSID.bind(this)}
            />{" "}
            <Collapse in={this.state.Emailerr}>
              <Alert
                severity="error"
                style={{ background: "inherit", color: "red" }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => this.handleEmailerr()}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Student ID is wrong!
              </Alert>
            </Collapse>
            <Input
              w="505px"
              h="105px"
              ph="Password"
              fsize="35px"
              type="password"
              value="123"
              Licon={<PasswordLogo />}
              handleSID={this.handlePass.bind(this)}
            />
            <Collapse in={this.state.Passerr}>
              <Alert
                severity="error"
                style={{ background: "inherit", color: "red" }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => this.handlePasserr()}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Password is wrong!
              </Alert>
            </Collapse>
            <Button
              ph="LOGIN"
              w="368px"
              h="107px"
              mb="16px"
              mt="120px"
              checkPass={this.checkPass.bind(this)}
            />
            <Typography style={{ color: "white" }}>Forgot Password?</Typography>
          </Box>
        </Box>
      </Box>
    )
  }
}
