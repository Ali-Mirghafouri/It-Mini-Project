import React from "react";
import { Box, Typography } from "@material-ui/core";

export default class SubjectsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.mark === "-1") {
      return (
        <Box
          style={{
            width: "500px",
            height: "511px",
            backgroundColor: "white",
            borderRadius: "50px",
            marginLeft: "91px",
            display: "grid",
            justifyItems: "center",
            alignContent: "center",
          }}
        >
          <Box
            style={{
              width: "428px",
              height: "319px",
              display: "grid",
              justifyItems: "center",
              alignContent: "center",
              backgroundColor: "#FF6161",
              border: "1px solid black",
              borderRadius: "40px",
            }}
          >
            <Typography style={{ fontSize: "60px", color: "white" }}>
              {this.props.Subject}
            </Typography>
          </Box>
          <Typography style={{ fontSize: "25px", marginBottom: "10px", textAlign:"center" }}>
            {this.props.SubjectName}
          </Typography>
          <button
            style={{
              height: "68px",
              width: "209px",
              border: "1px solid black",
              borderRadius: "50px",
              backgroundColor: "#D22727",
              color: "white",
              fontSize: "27px",
            }}
            onClick={() =>
              this.props.handleAccessSubject(this.props.obj)
            }
          >
            Access
          </button>
        </Box>
      );
    } else {
      return<React.Fragment></React.Fragment>;
    }
  }
}
