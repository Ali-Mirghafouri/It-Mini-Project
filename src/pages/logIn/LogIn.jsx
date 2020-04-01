import React from "react";
import bg from "../../assets/bg.png";
import { Box, Typography } from "@material-ui/core";
import Input from "../../componants/Input";
import Button from "../../componants/Button";
import { EmailLogo, PasswordLogo } from "../../assets/icons";
import HelpLogo from "../../assets/HelpLogo.png";

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
      
    }
  }
  render() {
    return (
      <Box
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "0px",
            margin: "0px",
            position: "absolute"
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
              justifyContent: "center"
            }}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "505px",
            height: "508px"
          }}
        >
          <Box
            style={{
              zIndex: "100",
              display: "grid",
              alignContent: "center",
              justifyItems: "center"
            }}
          >
            <Box
              style={{
                width: "600px",
                height: "300px"
              }}
            >
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${HelpLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
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
            />{" "}
            <Input
              w="505px"
              h="105px"
              mb="136px"
              ph="Password"
              fsize="35px"
              type="password"
              Licon={<PasswordLogo />}
            />
            <Button ph="LOGIN" w="368px" h="107px" mb="16px" LogInCheck={this.props.LogInCheck} />
            <Typography style={{ color: "white" }}>Forgot Password?</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}