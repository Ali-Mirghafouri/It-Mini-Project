import React from "react";
import { Box, Typography } from "@material-ui/core";

export default class WeeklyCalender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: JSON.parse(localStorage.getItem(this.props.student))
    };
  }

componentDidMount() {
  console.log(this.state.student)
}

  displayCal(
    id,
    WeedDay,
    Class1Name,
    Class1Time,
    Class2Name,
    Class2Time,
    Class3Name,
    Class3Time,
    Class4Name,
    Class4Time
  ) {
    return (
      <Box style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" }}>
        <Box
          style={{
            minWidth: "340px",
            minHeight: "95px",
            backgroundColor: "#8D0C0C",
            border: "1px solid #DEDEDE",
          }}
        >
          <Typography
            style={{ fontSize: "60px", color: "white", textAlign: "center" }}
          >
            {WeedDay}
          </Typography>
        </Box>
        <Box
          style={{
            minWidth: "340px",
            minHeight: "109px",
            backgroundColor: Class1Name === null ? "" : "#FE9696",
            border: "1px solid #DEDEDE",
          }}
        >
          <Typography
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            {Class1Time}
          </Typography>
          <Typography
            style={{
              fontSize: "35px",
              color: "black",
              textAlign: "center",
            }}
          >
            {Class1Name}
          </Typography>
        </Box>
        <Box
          style={{
            minWidth: "340px",
            minHeight: "109px",
            backgroundColor: Class2Name === null ? "" : "#FE9696",
            border: "1px solid #DEDEDE",
          }}
        >
          <Typography
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            {Class2Time}
          </Typography>
          <Typography
            style={{
              fontSize: "35px",
              color: "black",
              textAlign: "center",
            }}
          >
            {Class2Name}
          </Typography>
        </Box>
        <Box
          style={{
            minWidth: "340px",
            minHeight: "109px",
            backgroundColor: Class3Name === null ? "" : "#FE9696",
            border: "1px solid #DEDEDE",
          }}
        >
          <Typography
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            {Class3Time}
          </Typography>
          <Typography
            style={{
              fontSize: "35px",
              color: "black",
              textAlign: "center",
            }}
          >
            {Class3Name}
          </Typography>
        </Box>
        <Box
          style={{
            minWidth: "340px",
            minHeight: "109px",
            backgroundColor: Class4Name === null ? "" : "#FE9696",
            border: "1px solid #DEDEDE",
          }}
        >
          <Typography
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            {Class4Time}
          </Typography>
          <Typography
            style={{
              fontSize: "35px",
              color: "black",
              textAlign: "center",
            }}
          >
            {Class4Name}
          </Typography>
        </Box>
      </Box>
    );
  }

  render() {
    return (
      <Box
        style={{
          width: "100%",
          height: "749px",
          backgroundColor: "white",
          borderRadius: "40px",
        }}
      >
        <Typography
          style={{ textAlign: "center", fontSize: "60px", fontWeight: "bold" }}
        >
          WEEKLY SCHEDULE
        </Typography>
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          {this.state.student.subjectTime.map(
            ({
              id,
              WeedDay,
              Class1Name,
              Class1Time,
              Class2Name,
              Class2Time,
              Class3Name,
              Class3Time,
              Class4Name,
              Class4Time,
            }) => (
              <Box>
                {this.displayCal(
                  id,
                  WeedDay,
                  Class1Name,
                  Class1Time,
                  Class2Name,
                  Class2Time,
                  Class3Name,
                  Class3Time,
                  Class4Name,
                  Class4Time
                )}
              </Box>
            )
          )}
        </Box>
      </Box>
    );
  }
}
