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

  bars() {
    return (
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "35px",
          justifyContent: "center",
          alignItems: "center",
        }}
      > 
        {this.state.student.subjects.map(({Subject, mark}) => (
        <Box>
          {console.log(Subject)}
          <Typography style={{ fontSize: "35px" }}>{Subject}</Typography>
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
        ) )}
      </Box>
    );
  }

  render() {
    return <Box style={{ height: "cover", width: "825px" }}>{this.bars()}</Box>;
  }
}
