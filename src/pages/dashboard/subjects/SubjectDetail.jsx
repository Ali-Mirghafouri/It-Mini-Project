import React from "react"
import { Box, Typography } from "@material-ui/core"
import List from "../../../componants/List"

export default class SubjectDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ListOptions: [
        {
          Text: "Lectures",
          Files: this.props.AccessSubject.Lectures,
        },
        {
          Text: "Tutorial",
          Files: this.props.AccessSubject.Toturial,
        },
      ],
    }
  }

  // handlePDF(Text, Files) {
  //   if ( Text === "Lecture") {
  //     let Lecture = ""
  //     for (let index = 0; index < this.props.AccessSubject.Lectures.length; index++) {
  //         Lecture = this.props.AccessSubject.Lectures[index]
  //     }
  //   }
  // }

  // fillOptions() {
  //   let PropLec = this.props.AccessSubject.Lectures
  //   let PropTot = this.props.AccessSubject.Toturial
  //   let Lectures = this.state.ListOptions[0].Files
  //   let Toturial = this.state.ListOptions[1].Files
  //   console.log(PropLec)
  //   this.setState ({
  //     Lectures: PropLec,
  //     [Toturial]: PropTot
  //   }, () => console.log(this.state.ListOptions[0].Files))
  // }

  componentDidMount() {
    // this.fillOptions()
    console.log(this.state.ListOptions)
  }

  render() {
    return (
      <Box>
        <Box style={{ marginLeft: "50px" }}>
          <Typography
            style={{
              fontSize: "90px",
              fontWeight: "500px",
              textDecoration: "underline",
            }}
          >
            {this.props.AccessSubject.Subject}
          </Typography>
          <Typography
            style={{
              fontSize: "50px",
              fontWeight: "100px",
              textDecoration: "underline",
            }}
          >
            {this.props.AccessSubject.description}
          </Typography>
          <Typography>
            <span style={{ fontSize: "35px", fontWeight: "bold" }}>Lecturer:</span>
            <span style={{ fontSize: "30px" }}>{this.props.AccessSubject.Lecturer}</span>
          </Typography>
          <Typography>
            <span style={{ fontSize: "35px", fontWeight: "bold" }}>Email:</span>
            <span style={{ fontSize: "30px" }}>{this.props.AccessSubject.Email}</span>
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          {this.state.ListOptions.map(({ Text, Files }) => (
            // <Box onClick={() => this.handlePDF(Text, Files)} >
            <Box>
              <List Text={Text} Files={Files} />
            </Box>
          ))}
        </Box>
        <Box
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <button
            onClick={() => this.props.handleShowSubject()}
            style={{
              fontSize: "20px",
              border: "1px solid black",
              borderRadius: "18px",
              width: "150px",
              height: "50px",
              marginRight: "20px",
            }}
          >
            back
          </button>
        </Box>
      </Box>
    )
  }
}
