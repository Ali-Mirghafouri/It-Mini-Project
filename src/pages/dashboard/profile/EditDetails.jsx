import React from "react";
import { Box, Typography } from "@material-ui/core";

export default class EditDetails extends React.Component {
  constructor(props) {
    super(props);
    let Student = JSON.parse(localStorage.getItem(this.props.student));
    let users = JSON.parse(localStorage.getItem("userTable"));

    this.state = {
      student: Student,
      phoneNumber: Student.PhoneNumber,
      Email: Student.Email,
      submit: [true, true],
      oldPass: null,
      newPass: null,
      checkPass: null,
      currentPass: null,
      Users: users,
      changePass: [],
    };
  }

  componentDidMount() {
    this.findPass();
  }

  findPass() {
    for (let index = 0; index < this.state.Users.length; index++) {
      if (
        this.state.Users[index].studentId ===
        this.state.student.ID.toLowerCase()
      ) {
        this.setState({
          currentPass: this.state.Users[index].password,
        });
        let temp = JSON.parse(localStorage.getItem("userTable"));
        temp.splice(index, 1);
        this.setState({
          changePass: temp,
        });
      }
    }
  }

  handleSubmit() {
    let newStudent = this.state.student;
    newStudent.Email = this.state.Email;
    newStudent.PhoneNumber = this.state.phoneNumber;
    let temp = [];
    let email = false;
    let phonenumber = false;
    let currpass = false;
    let newpass = false;
    if (this.state.submit[0] === true) {
      email = true;
      temp.push({
        Email: this.state.Email,
      });
    }
    if (this.state.submit[1] === true) {
      phonenumber = true;
      temp.push({
        PhoneNumber: this.state.PhoneNumber,
      });
    }
    if (this.state.oldPass === this.state.currentPass) {
      currpass = true;
    }
    if (this.state.newPass === this.state.checkPass) {
      if (this.state.newPass !== null && this.state.newPass !== " ") {
        newpass = true;
      }
    }
    if (phonenumber === true && email === true) {
      localStorage.removeItem(this.props.student);
      localStorage.setItem(this.props.student, JSON.stringify(newStudent));
      if (currpass === true && newpass === true) {
        this.state.changePass.push({
          studentId: this.state.student.ID.toLowerCase(),
          password: this.state.newPass,
        });
        localStorage.removeItem("userTable");
        localStorage.setItem(
          "userTable",
          JSON.stringify(this.state.changePass)
        );
      }

      this.props.handleDisplayEditPage();
    }
  }

  handleCheckPass(event) {
    let inp = event.target.value;
    this.setState(
      {
        checkPass: inp,
      },
      () => console.log(this.state.checkPass)
    );
  }

  handleNewPass(event) {
    let inp = event.target.value;
    this.setState(
      {
        newPass: inp,
      },
      () => console.log(this.state.newPass)
    );
  }

  handleOldPass(event) {
    let inp = event.target.value;
    this.setState(
      {
        oldPass: inp,
      },
      () => console.log(this.state.oldPass)
    );
  }

  handleEmail(event) {
    let inp = event.target.value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({
      Email: inp,
    });
    if (inp.match(mailformat) && this.state.submit[0] !== true) {
      let Submit = this.state.submit;
      Submit.shift();
      Submit.unshift(true);
      this.setState(
        {
          submit: Submit,
        },
        () => console.log("yeay  -------->  " + this.state.submit)
      );
    } else if (
      inp.match(mailformat) === null &&
      this.state.submit[0] !== false
    ) {
      let Submit = this.state.submit;
      Submit.shift();
      Submit.unshift(false);
      this.setState(
        {
          submit: Submit,
        },
        () => console.log("yeay  -------->  " + this.state.submit)
      );
    }
  }

  handlePhoneNumber(event) {
    let inp = event.target.value;
    var phoneno = /^\d{10}$/;
    this.setState({
      phoneNumber: inp,
    });
    if (inp.match(phoneno) && this.state.submit[1] !== true) {
      let Submit = this.state.submit;
      Submit.pop();
      Submit.push(true);
      this.setState(
        {
          submit: Submit,
        },
        () => console.log("true  -------->  " + this.state.submit)
      );
      if (inp.match(phoneno) === null && this.state.submit[1] === true) {
        let Submit = this.state.submit;
        Submit.pop();
        Submit.push(false);
        this.setState(
          {
            submit: Submit,
          },
          () => console.log("false  -------->  " + this.state.submit)
        );
      }
    }
  }

  render() {
    return (
      <Box style={{ display: "flex" }}>
        <Box style={{ width: "400px" }}>
          <Box
            style={{
              width: "275px",
              height: "275px",
              backgroundColor: "black",
              borderRadius: "100%",
              marginRight: "10px",
              marginLeft: "55px",
            }}
          />
          <Typography style={{ textAlign: "center", fontSize: "32px", marginLeft: "5px" }}>
            Change Profile picture
          </Typography>
        </Box>
        <Box style={{ marginLeft: "110px", width: "100%" }}>
          <Typography
            style={{ fontSize: "32px", padding: "5px", marginTop: "45px" }}
          >
            Email Address
          </Typography>
          <input
            style={{
              width: "992px",
              height: "73px",
              fontSize: 32,
              padding: "0px",
              border: "1px solid black",
              borderRadius: "37px",
              color: "black",
              paddingLeft: "20px",
            }}
            onChange={(e) => this.handleEmail(e)}
            value={this.state.Email}
          ></input>
          <Typography
            style={{ fontSize: "32px", padding: "5px", marginTop: "45px" }}
          >
            Phone Number
          </Typography>
          <input
            style={{
              width: "992px",
              height: "73px",
              fontSize: 32,
              padding: "0px",
              border: "1px solid black",
              borderRadius: "37px",
              color: "black",
              paddingLeft: "20px",
            }}
            onChange={(e) => this.handlePhoneNumber(e)}
            value={this.state.phoneNumber}
          ></input>
          <Typography
            style={{ fontSize: "32px", padding: "5px", marginTop: "45px" }}
          >
            Change Password
          </Typography>
          <input
            style={{
              width: "992px",
              height: "73px",
              fontSize: 32,
              padding: "0px",
              border: "1px solid black",
              borderRadius: "37px",
              color: "black",
              paddingLeft: "20px",
              // marginTop:"10px"
            }}
            placeholder="Enter old password"
            onChange={(e) => this.handleOldPass(e)}
            //   value={this.state.phoneNumber}
          ></input>
          <input
            style={{
              width: "992px",
              height: "73px",
              fontSize: 32,
              padding: "0px",
              border: "1px solid black",
              borderRadius: "37px",
              color: "black",
              paddingLeft: "20px",
              marginTop: "20px",
            }}
            placeholder="New password"
            onChange={(e) => this.handleNewPass(e)}
            //   value={this.state.phoneNumber}
          ></input>
          <input
            style={{
              width: "992px",
              height: "73px",
              fontSize: 32,
              padding: "0px",
              border: "1px solid black",
              borderRadius: "37px",
              color: "black",
              paddingLeft: "20px",
              marginTop: "20px",
            }}
            placeholder="Type new password again"
            onChange={(e) => this.handleCheckPass(e)}
            //   value={this.state.phoneNumber}
          ></input>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            <button
              style={{
                width: "275px",
                height: "70px",
                backgroundColor: "#B5B5B5",
                border: "1px solid black",
                fontSize: "32px",
                borderRadius: "35px",
                marginRight: "15px",
              }}
              onClick={() => this.props.handleDisplayEditPage()}
            >
              Cancel
            </button>
            <button
              style={{
                width: "275px",
                height: "70px",
                backgroundColor: "#B5B5B5",
                border: "1px solid black",
                fontSize: "32px",
                borderRadius: "35px",
              }}
              onClick={() => this.handleSubmit()}
            >
              Submit
            </button>
          </Box>
        </Box>
      </Box>
    );
  }
}
