import React from "react";
import { Box, Typography } from "@material-ui/core";

export default class UpComingEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box
        style={{ width: "536px", height: "580px", backgroundColor: "white" }}
      >
        <Typography
          style={{
            fontSize: "37px",
            borderBottom: "1px solid #707070",
            textAlign: "center",
            padding: "5px",
          }}
        >
          Upcoming
        </Typography>
        <Box
          style={{
            marginTop: "46px",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              width: "497px",
              height: "147px",
              border: "1px solid #707070",
              display: "flex",
              marginBottom: "40px",
            }}
          >
            <Box style={{ borderRight: "1px solid black", width: "166px" }}>
              <Typography
                style={{
                  fontSize: "75px",
                  textAlign: "center",
                  color: "#FED11E",
                }}
              >
                1
              </Typography>
              <Typography style={{ fontSize: "20px", textAlign: "center" }}>
                April 2020
              </Typography>
            </Box>
            <Box style={{ width: "100%" }}>
              <Typography
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  paddingTop: "40px",
                }}
              >
                C# Workshop
              </Typography>
              <Typography style={{ fontSize: "15px", textAlign: "center" }}>
                Sun 12pm - 2pm
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              width: "497px",
              height: "147px",
              border: "1px solid #707070",
              display: "flex",
            }}
          >
            <Box style={{ borderRight: "1px solid black", width: "166px" }}>
              <Typography
                style={{
                  fontSize: "75px",
                  textAlign: "center",
                  color: "#FED11E",
                }}
              >
                10
              </Typography>
              <Typography style={{ fontSize: "20px", textAlign: "center" }}>
                April 2020
              </Typography>
            </Box>
            <Box style={{ width: "100%" }}>
              <Typography
                style={{
                  fontSize: "25px",
                  textAlign: "center",
                  paddingTop: "40px",
                }}
              >
                International Student Day
              </Typography>
              <Typography style={{ fontSize: "15px", textAlign: "center" }}>
                Tues 12pm - 2pm
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "42px",
            }}
          >
            <button
              style={{
                width: "336px",
                height: "80px",
                borderRadius: "32px",
                backgroundColor: "#FFA023",
                border: "1px solid black",
              }}
              onClick={() => this.props.changePageID(3)}
            >
              See all events
            </button>
          </Box>
        </Box>
      </Box>
    );
  }
}
