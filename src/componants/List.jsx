import React from "react"
import { Box, Typography } from "@material-ui/core"
import { ListIcon } from "../assets/icons"
import lec1 from "../docs/DIP1MPRO1 - Lecture1.pdf"
import lec2 from "../docs/DIP1MPRO1 - Lecture2.pdf"
import lec3 from "../docs/DIP1MPRO1 - Lecture3.pdf"
import lec4 from "../docs/DIP1MPRO1 - Lecture4.pdf"

export default class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ListOpen: false,
      Files: [],
      lects: [lec1, lec2, lec3, lec4],
    }
  }

  handleFiles() {
    const Files = []
    for (let i = 0; i < this.props.Files.length; i++) {
      Files.push({
        File: this.props.Files[i],
      })
    }
    this.setState({
      Files: Files,
    })
  }

  componentDidMount() {
    this.handleFiles()
  }

  // downloadfile(index, file) {
  //   console.log(index)
  //     return(
  //       <a href={Pdf} target='_blank'>{file}</a>
  //     )
  // }

  listOpen() {
    console.log(this.state.Files)
    return (
      <Box style={{ width: "840px", backgroundColor: "white" }}>
        {this.state.Files.map(({ File }, index) => (
          // <Box onClick={() => this.downloadfile(index, File)}>
          <Box>
            {/* <Typography style={{ fontSize: "25px" }}>{File}</Typography> */}
            <a href={this.state.lects[index]} target="_blank">
              {File}
            </a>
          </Box>
        ))}
      </Box>
    )
  }

  handleListOpen() {
    if (this.state.ListOpen === false) {
      this.setState({
        ListOpen: true,
      })
    } else {
      this.setState({
        ListOpen: false,
      })
    }
  }

  render() {
    return (
      <Box style={{ marginLeft: "50px" }}>
        <Box
          onClick={() => this.handleListOpen()}
          style={{
            width: "840px",
            height: "72px",
            backgroundColor: "#DE3737",
            border: "1px solid black",
            display: "flex",
          }}
        >
          <Typography style={{ fontSize: "40px", color: "white" }}>
            {this.props.Text}
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "15px",
            }}
          >
            <ListIcon />
          </Box>
        </Box>
        {this.state.ListOpen ? this.listOpen() : null}
      </Box>
    )
  }
}
