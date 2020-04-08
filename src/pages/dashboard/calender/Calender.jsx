import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Event } from "../../../dummyData/Dummy";

export default class Calender extends React.Component {
  constructor() {
    super();
    var d = new Date();
    var dayInMonth = [];
    var DayInMonth = [
      (dayInMonth[0] = "January"),
      (dayInMonth[1] = "February"),
      (dayInMonth[2] = "March"),
      (dayInMonth[3] = "April"),
      (dayInMonth[4] = "May"),
      (dayInMonth[5] = "June"),
      (dayInMonth[6] = "July"),
      (dayInMonth[7] = "August"),
      (dayInMonth[8] = "September"),
      (dayInMonth[9] = "October"),
      (dayInMonth[10] = "November"),
      (dayInMonth[11] = "December"),
    ];
    var NameOfMonth = DayInMonth[d.getMonth()];
    var Month = d.getMonth();
    var Year = d.getFullYear();
    var Day = d.getDay();
    var DateNow = d.getDate();
    this.state = {
      numDaysInMonth: [],
      month: Month,
      year: Year,
      day: Day,
      date: DateNow,
      Event: null,
      nameOfMonth: NameOfMonth,
    };
  }

  gettingDate(year, month) {
    return new Date(year, month, 0).getDate();
  }

  handleEvent() {
    const event = [];
    for (let i = 0; i < Event.length; i++) {
      event.push({
        event: Event[i],
      });
    }
    this.setState({
      Event: event,
    });
  }

  handlenumofdays() {
    const numofdays = [];
    let index = this.gettingDate(this.state.month, this.state.year);
    for (let i = 0; i < index; i++) {
      numofdays.push({
        numofdays: i,
      });
    }
    this.setState(
      {
        numDaysInMonth: numofdays,
      },
      () => console.log(this.state.numDaysInMonth)
    );
  }

  componentDidMount() {
    this.handleEvent();
    this.handlenumofdays();
  }

  displayDays(Today) {
    return this.state.numDaysInMonth.map(({ numofdays }) => (
      <Box
        style={{
          width: "97px",
          height: "97px",
          borderRadius: "100%",
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          backgroundColor: numofdays + 1 === Today ? "#E37777" : "",
        }}
      >
        <Typography
          style={{
            fontSize: "37px",
            color: Event[0] === numofdays + 1 || Event[1] === numofdays + 1 ? "#FED11E" : "black",
          }}
        >
          {numofdays + 1}
        </Typography>
      </Box>
    ));
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
              borderRadius: "31px",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid black",
              }}
            >
              <Box style={{ marginRight: "30px" }}>
                <Typography style={{ fontSize: "45px", fontWeight: "bold" }}>
                  {"<"}
                </Typography>
              </Box>
              <Box>
                <Typography style={{ fontSize: "37px", fontWeight: "bold" }}>
                  {this.state.nameOfMonth.toUpperCase()}
                </Typography>
              </Box>
              <Box style={{ marginLeft: "30px" }}>
                <Typography style={{ fontSize: "45px", fontWeight: "bold" }}>
                  {">"}
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "37px",
                  fontWeight: "bold",
                }}
              >
                Sun
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "37px",
                  fontWeight: "bold",
                }}
              >
                Mon
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "37px",
                  fontWeight: "bold",
                }}
              >
                Tues
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "37px",
                  fontWeight: "bold",
                }}
              >
                Wed
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "37px",
                  fontWeight: "bold",
                }}
              >
                Thurs
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "37px",
                  fontWeight: "bold",
                }}
              >
                Fri
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "37px",
                  fontWeight: "bold",
                }}
              >
                Sat
              </Typography>
              {this.displayDays(this.state.date)}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
