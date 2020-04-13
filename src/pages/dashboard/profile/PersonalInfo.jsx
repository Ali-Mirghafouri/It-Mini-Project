import React from "react";
import { Box, Typography } from "@material-ui/core";

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: JSON.parse(localStorage.getItem(this.props.student)),
    };
  }

  render() {
    return (
      <Box style={{ display: "flex" }}>
        <Box
          style={{
            width: "275px",
            height: "275px",
            backgroundColor: "black",
            borderRadius: "100%",
            marginRight: "10px",
            marginLeft: "38px",
          }}
        />
        <Box>
          <Typography style={{ fontSize: "45px" }}>
            {this.state.student.Name}
          </Typography>
          <Typography style={{ fontSize: "43px", fontWeight: "" }}>
            {this.state.student.ID}
          </Typography>
          <Typography style={{ fontSize: "36px", fontWeight: "" }}>
            {this.state.student.Course}
          </Typography>
          <Typography style={{ fontSize: "26px", fontWeight: "" }}>
            {this.state.student.Email}
          </Typography>
          <Typography style={{ fontSize: "23px", fontWeight: "" }}>
            {this.state.student.PhoneNumber}
          </Typography>
          <button
            style={{
              color: "black",
              backgroundColor: "#A5A5A5",
              border: "1px solid black",
              borderRadius: "18px",
              fontSize: "20px",
              width: "143px",
              height: "45px",
              marginTop: "10px",
            }}
            onClick={() => this.props.handleDisplayEditPage()}
          >
            Edit Details
          </button>
        </Box>
      </Box>
    );
  }
}
