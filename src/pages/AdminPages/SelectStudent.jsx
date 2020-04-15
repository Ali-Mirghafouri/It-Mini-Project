import React from "react"
import { Box, Typography } from "@material-ui/core"
// import { Students } from "../../initData"

const header = ["Subject Code", "Name", "Enrolement Status", "Grades"]

export default class SelectStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: props.Students,
      selected: null,
      editbox: -1,
      inputtext: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  _handleKeyDown = (e) => {
    // console.log(index)
    // console.log(e)
    if (e.key === "Enter") {
      this.setState({
        editbox: -1,
      })
    }
  }

  handleChange(event) {
    this.setState({
      selected: event.target.value,
    })
  }

  handleEditChange(event, index) {
    // console.log(event.target.value)
    // console.log(index)
    //  this.state.students[this.state.selected - 1].subjects[index].mark
    let temp = [...this.state.students]
    temp[this.state.selected - 1].subjects[index].Grade = event.target.value
    this.setState({
      students: temp,
    })
  }

  edit(index) {
    this.setState({
      editbox: index,
    })
  }

  BuildRow(data, index) {
    let status = "COMPLETED"
    let mark = parseFloat(data.Grade)
    let bgcolor = "#81FF81"

    if (mark < 0) {
      status = "CURRENT"
      bgcolor = "#E7FF81"
    }
    if (this.state.editbox === index) {
      // console.log(mark)
      if (mark < 0) {
        status = "CURRENT"
        bgcolor = "#E7FF81"
      }
      if (mark > 4) {
        status = "INVALID"
        bgcolor = "#f54c4c"
      }
      if (mark >= 0 && mark <= 4) {
        status = "VALID"
        bgcolor = "#E7FF81"
      }
      if (isNaN(mark)) {
        status = "INVALID"
        bgcolor = "#f54c4c"
      }
    }
    return (
      <React.Fragment>
        <Box
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            padding: "5px",
          }}
        >
          <Typography style={{ fontSize: "24px", padding: "5px" }}>
            {data.Subject}
          </Typography>
        </Box>
        <Box
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            padding: "5px",
          }}
        >
          <Typography style={{ fontSize: "24px", padding: "5px" }}>
            {data.description}
          </Typography>
        </Box>
        <Box
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            padding: "5px",
          }}
        >
          <Typography
            style={{
              backgroundColor: bgcolor,
              textAlign: "center",
              fontSize: "24px",
              padding: "5px",
            }}
          >
            {status}
          </Typography>
        </Box>
        <Box
          onClick={data.Grade === "-1" ? () => this.edit(index) : null}
          style={{
            cursor: data.Grade === "-1" ? "pointer" : "",
            backgroundColor: "white",
            border: "1px solid black",
            padding: "5px",
          }}
        >
          {this.state.editbox === index ? (
            <input
              style={{ fontSize: "20px" }}
              type="tel"
              value={this.state.students[this.state.selected - 1].subjects[index].Grade}
              onChange={(e) => this.handleEditChange(e, index)}
              onKeyDown={this._handleKeyDown}
            />
          ) : (
            <Typography
              style={{
                textAlign: "center",
                fontSize: "24px",
                padding: "5px",
              }}
            >
              {data.Grade !== "-1" ? data.Grade : "?"}
            </Typography>
          )}
        </Box>
      </React.Fragment>
    )
  }

  checkAdmin(val, index) {
    if (val.Name !== "Admin") {
      return (
        <option key={index} value={index + 1} style={{ fontSize: "24px" }}>
          {val.Name + " - " + val.ID}
        </option>
      )
    }
  }

  updateLocalStorage() {
    console.log(Object.entries(localStorage))
    let student = "Student"
    const temp = JSON.parse(localStorage.getItem("userTable"))
    for (let i = 0; i < temp.length; i++) {
      student = "studentb" + temp[i].studentId
      let s1 = JSON.parse(localStorage.getItem(student))
      console.log(student)
      console.log(s1)
      console.log(this.state.students[this.state.selected - 1])
      // if (student !== "Studentb") {
      if (s1.ID === this.state.students[this.state.selected - 1].ID) {
        localStorage.removeItem(student)
        localStorage.setItem(
          student,
          JSON.stringify(this.state.students[this.state.selected - 1])
        )
        return
      }
      // }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "20px",
          }}
        >
          <Typography style={{ fontSize: "24px", marginRight: "30px" }}>
            Select Student
          </Typography>
          <select
            name="advisor_category.type"
            className="Register-Select"
            onChange={this.handleChange}
            style={{ fontSize: "24px" }}
          >
            <option value="" style={{ fontSize: "24px" }}>
              Please Select
            </option>
            {this.state.students.map((val, index) => this.checkAdmin(val, index))}
          </select>
        </Box>
        {this.state.selected ? (
          <React.Fragment>
            <Box display="flex" flexDirection="column" mt={2}>
              <Box
                style={{
                  margin: "10px 30px",
                  width: "90%",
                  display: "grid",
                  gridTemplateColumns: "1fr 4fr 2fr 1fr",
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
                    <Typography
                      style={{
                        textAlign: "center",
                        fontSize: "24px",
                        padding: "5px",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
                {this.state.students[this.state.selected - 1].subjects.map(
                  (val, index) => (
                    // <Typography key={index}>{val.Subject}</Typography>
                    <React.Fragment key={"rows" + index.toString()}>
                      {this.BuildRow(val, index)}
                    </React.Fragment>
                  )
                )}
              </Box>
            </Box>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  width: "280px",
                  height: "60px",
                  color: "white",
                  backgroundColor: "#00000050",
                  border: "1px solid white",
                  borderRadius: "30px",
                  fontSize: "24px",
                  marginBottom: "16px",
                  marginTop: "120px",
                }}
                onClick={() => this.updateLocalStorage()}
              >
                Submit
              </button>
            </Box>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    )
  }
}
