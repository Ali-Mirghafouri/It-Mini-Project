import React from "react"
import { Box, Typography } from "@material-ui/core"

const header = [
  "Subject Code",
  "Name",
  "FL",
  "PS2",
  "PS1",
  "CR2",
  "CR1",
  "DI2",
  "DI1",
  "HD2",
  "HD1",
]

function BuildRow(data) {
  let marks = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  let colors = [
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ]
  let mark = parseFloat(data.Grade)
  if (mark === -1) {
    marks = ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    colors = [
      "#989898",
      "#989898",
      "#989898",
      "#989898",
      "#989898",
      "#989898",
      "#989898",
      "#989898",
      "#989898",
    ]
  } else if (mark >= 0 && mark < 2.25) {
    marks[0] = data.Grade
    colors[0] = "red"
  } else if (mark >= 2.25 && mark < 2.5) {
    marks[1] = data.Grade
    colors[1] = "#00FF33"
  } else if (mark >= 2.5 && mark < 2.75) {
    marks[2] = data.Grade
    colors[2] = "#00FF33"
  } else if (mark >= 2.75 && mark < 3) {
    marks[3] = data.Grade
    colors[3] = "#00FF33"
  } else if (mark >= 3 && mark < 3.25) {
    marks[4] = data.Grade
    colors[4] = "#00FF33"
  } else if (mark >= 3.25 && mark < 3.5) {
    marks[5] = data.Grade
    colors[5] = "#00FF33"
  } else if (mark >= 3.5 && mark < 3.75) {
    marks[6] = data.Grade
    colors[6] = "#00FF33"
  } else if (mark >= 3.75 && mark < 4) {
    marks[7] = data.Grade
    colors[7] = "#00FF33"
  } else if (mark === 4) {
    marks[8] = data.Grade
    colors[8] = "#00FF33"
  }
  console.log(data)
  return (
    <React.Fragment>
      <Box
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        <Typography>{data.Subject}</Typography>
      </Box>
      <Box
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        <Typography>{data.description}</Typography>
      </Box>
      {marks.map((val, index) => (
        <Box
          style={{
            backgroundColor: colors[index],
            border: "1px solid black",
            padding: "5px 0",
          }}
        >
          <Typography style={{ textAlign: "center" }}>{val}</Typography>
        </Box>
      ))}
    </React.Fragment>
  )
}

export default class CourseGrades extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      student: JSON.parse(localStorage.getItem(this.props.student)),
    }
  }

  render() {
    return (
      <Box
        style={{
          margin: "20px 20px",
          width: "96%",
        }}
      >
        {/* {console.log(this.state.student.subjects)} */}
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          style={{ padding: "5px 20px" }}
        >
          <Typography style={{ fontSize: "30px", fontWeight: "600" }}>
            COURSE GRADES
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "auto",
              backgroundColor: "#00D563",
            }}
          >
            <Typography
              style={{
                width: "100%",
                textAlign: "center",
                padding: "10px 5px",
              }}
            >
              CGPA
            </Typography>
            <Box
              style={{
                width: "90%",
                height: "1px",
                border: "1px solid black",
                margin: "0px auto",
              }}
            />
            <Typography
              style={{
                width: "100%",
                textAlign: "center",
                padding: "10px 5px",
                fontWeight: "700",
              }}
            >
              3.50
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" mt={2}>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 7fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            }}
          >
            {header.map((item, index) => (
              <Box
                key={"boxx" + index.toString()}
                style={{
                  backgroundColor: "white",
                  border: "1px solid black",
                }}
              >
                <Typography style={{ textAlign: "center" }}>{item}</Typography>
              </Box>
            ))}
            {this.state.student.subjects.map((subject, index) => (
              <React.Fragment key={"rows" + index.toString()}>
                {BuildRow(subject)}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    )
  }
}
