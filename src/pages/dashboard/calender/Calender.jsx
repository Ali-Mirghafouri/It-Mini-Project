import React from "react";
import { Box, Typography } from "@material-ui/core";

export default class Calender extends React.Component {
  constructor() {
    super();
    var d = new Date();
    var Month = d.getMonth();
    var Year = d.getFullYear();
    var Day = d.getDay();
    this.state = {
      numDaysInMonth: this.gettingDate(Month, Year),
      month: Month,
      year: Year,
      day: Day
    };
  }

  gettingDate(year, month) {
    return new Date(year, month, 0).getDate();
  }


  render() {
    return (
      <Box
        style={{
          width: "1186px",
          height: "820px",
          backgroundColor: "white",
          borderRadius: "63px",
        }}
      >
        <Typography
          style={{
            fontSize: "50px",
            borderBottom: "1px solid black",
            textAlign: "center",
            width: "100%",
          }}
        >
          Calender
        </Typography>
        <Box
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            width: "1186px",
            marginTop: "30px",
          }}
        >
          <Box
            style={{
              width: "1080px",
              height: "650px",
              backgroundColor: "white",
              border: "1px solid #707070",
            }}
          ></Box>
        </Box>
      </Box>
    );
  }
}
