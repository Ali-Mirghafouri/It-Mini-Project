import React from "react";
import { Box } from "@material-ui/core";
import WeeklyCalender from "./WeeklyCalender";
import Calender from "./Calender";

export default class CalenderPaje extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Box>
        <Box style={{margin:"0px 10px"}} >
          <WeeklyCalender />
        </Box>
        <Box style={{marginTop:"32px", marginLeft:"10px"}} >
          <Calender />
        </Box>
      </Box>
    );
  }
}
