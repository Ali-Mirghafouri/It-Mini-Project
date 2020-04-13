import React from "react"
import bg from "../../assets/bg.png"
import { Box, Typography } from "@material-ui/core"
import Input from "../../componants/Input"
import Button from "../../componants/Button"
import { EmailLogo, PasswordLogo } from "../../assets/icons"
import HelpLogo from "../../assets/HelpLogo.png"
import { Students } from "../../initData"
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
      SID: null,
      pass: null,
    }
  }

  initData() {
    // const temp = []
    // for (let i = 0; i < Students.length; i++) {
    //   temp.push({
    //     studentId: logInInit[i].studentId,
    //     password: logInInit[i].password
    //   })
    // }
    // localStorage.clear()
    localStorage.setItem("Students", JSON.stringify(Students))
    console.log(localStorage.getItem("Students"))
  }

  handleSID(event) {
    let inp = event.target.value
    inp = "b1801867" //DELETE THIS LINE
    this.setState({
      SID: inp,
    })
  }

  handlePass(event) {
    let inp = event.target.value
    inp = "123" //DELETE THIS LINE
    this.setState({
      pass: inp,
    })
  }

  checkPass() {
    let student = "Student"
    const temp = JSON.parse(localStorage.getItem("userTable"))
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].studentId === this.state.SID.toLowerCase() &&
        temp[i].password === this.state.pass
      ) {
        this.props.LogInCheck();
        student = student + "b" + temp[i].studentId.slice(4, 8);
        let id = temp[i].studentId;
        console.log(Students[i]);
        // this.initData()
        for (let i = 0; i < Students.length; i++) {
          if (id === Students[i].ID.toLowerCase()) {
            localStorage.setItem(student, JSON.stringify(Students[i]))
            // console.log(localStorage.getItem(student))
            this.props.handleStudent(student)
          }
        }
        // localStorage.setItem(student, JSON.stringify(Students.student))
        // console.log(localStorage.getItem(student))
      }
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
              alignContent: "center",
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
            <Input
              w="505px"
              h="105px"
              mb="136px"
              ph="Password"
              fsize="35px"
              type="password"
              value="123"
              Licon={<PasswordLogo />}
              handleSID={this.handlePass.bind(this)}
            />
            <Button
              ph="LOGIN"
              w="368px"
              h="107px"
              mb="16px"
              checkPass={this.checkPass.bind(this)}
            />
            <Typography style={{ color: "white" }}>Forgot Password?</Typography>
          </Box>
        </Box>
      </Box>
    )
  }
}
