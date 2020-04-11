import React from "react";
import { Box, Typography } from "@material-ui/core";
import ProgressBar from 'react-animated-progress-bar';

export default class SubjectProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: JSON.parse(localStorage.getItem(this.props.student)),
    };
  }

  render() {
    return (
      <Box style={{display: "flex"}} >
          <Typography>DIP1MPR01</Typography>
          <ProgressBar width="540px" height="30px" percentage="75" rect bgColor="#31DC75" trackBorderColor="grey" trackPathColor="white" fontColor="black" />
      </Box>
    );
  }
}
