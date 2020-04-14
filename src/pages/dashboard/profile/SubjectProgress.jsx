import React from "react";
import { Box, Typography } from "@material-ui/core";
import ProgressBar from "react-animated-progress-bar";

export default class SubjectProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: JSON.parse(localStorage.getItem(this.props.student)),
    };
  }

  bars(Subject, mark, Grade) {
    if (Grade === "-1") {
      return (
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "grid",
              gridTemplateRows: "80px",
              // justifyContent: "center",
              alignItems: "center",
              marginRight: "50px",
            }}
          >
            <Box style={{ height: "cover" }}>
              <Typography style={{ fontSize: "35px" }}>{Subject}</Typography>
            </Box>
          </Box>
          <Box
            style={{
              display: "grid",
              gridTemplateRows: "80px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressBar
              width="540px"
              height="30px"
              percentage={mark}
              rect
              bgColor="#31DC75"
              trackBorderColor="grey"
              trackPathColor="white"
              fontColor="black"
            />
          </Box>
        </Box>
      );
    }
  }

  render() {
    return (
      <Box style={{ height: "cover", width: "825px" }}>
        <Box>
          {this.state.student.subjects.map(({ Subject, perc, Grade }) =>
            this.bars(Subject, perc, Grade)
          )}
        </Box>
      </Box>
    );
  }
}
