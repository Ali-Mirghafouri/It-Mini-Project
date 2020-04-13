import React from "react";
import { Box, Typography } from "@material-ui/core";

export default class EditDetails extends React.Component {
  constructor(props) {
    super(props);
    let Student = JSON.parse(localStorage.getItem(this.props.student))
    this.state = {
      student: Student,
      phoneNumber: Student.PhoneNumber,
      Email: Student.Email
    };
  }

handleEmail(event) {
let inp = event.target.value
this.setState({
    Email: inp
})
}

handlePhoneNumber(event) {
    let inp = event.target.value
    this.setState({
        phoneNumber: inp
    })
    }

  render() {
    return <Box style={{display: "flex"}} >
        <Box style={{width:"400px"}} >
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
        <Typography style={{textAlign:"center", fontSize:"32px"}} >Change Profile picture</Typography>
        </Box>
        <Box style={{marginLeft:"110px", width:"1100px"}} >
            <Typography style={{fontSize:"32px", padding:"5px", marginTop:"45px"}} >Email Address</Typography>
        <input
          style={{
            width: "992px",
            height: "73px",
            fontSize: 32,
            padding: "0px",
            border: "1px solid black",
            borderRadius:"37px",
            color:"black",
            paddingLeft:"20px",
          }}
          onChange={(e) => this.handleEmail(e)}
          value={this.state.Email}
        ></input>
              <Typography style={{fontSize:"32px", padding:"5px", marginTop:"45px"}} >Phone Number</Typography>
        <input
          style={{
            width: "992px",
            height: "73px",
            fontSize: 32,
            padding: "0px",
            border: "1px solid black",
            borderRadius:"37px",
            color:"black",
            paddingLeft:"20px",
          }}
          onChange={(e) => this.handlePhoneNumber(e)}
          value={this.state.phoneNumber}
        ></input>
                      <Typography style={{fontSize:"32px", padding:"5px", marginTop:"45px"}} >Change Password</Typography>
        <input
          style={{
            width: "992px",
            height: "73px",
            fontSize: 32,
            padding: "0px",
            border: "1px solid black",
            borderRadius:"37px",
            color:"black",
            paddingLeft:"20px",
            // marginTop:"10px"
          }}
          placeholder="Enter old password"
        //   onChange={(e) => this.handlePhoneNumber(e)}
        //   value={this.state.phoneNumber}
        ></input>
         <input
          style={{
            width: "992px",
            height: "73px",
            fontSize: 32,
            padding: "0px",
            border: "1px solid black",
            borderRadius:"37px",
            color:"black",
            paddingLeft:"20px",
            marginTop:"25px"
          }}
          placeholder="New password"
        //   onChange={(e) => this.handlePhoneNumber(e)}
        //   value={this.state.phoneNumber}
        ></input>
         <input
          style={{
            width: "992px",
            height: "73px",
            fontSize: 32,
            padding: "0px",
            border: "1px solid black",
            borderRadius:"37px",
            color:"black",
            paddingLeft:"20px",
            marginTop:"25px"
          }}
          placeholder="Type new password again"
        //   onChange={(e) => this.handlePhoneNumber(e)}
        //   value={this.state.phoneNumber}
        ></input>
        </Box>
    </Box>;
  }
}
