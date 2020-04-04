import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ListIcon } from "../assets/icons";

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ListOpen: false,
      Files: []
    };
  }

  handleFiles() {
    const Files = [];
    for (let i = 0; i < this.props.Files.length; i++) {
      Files.push({
        File: this.props.Files[i]
      });
    }
    this.setState({
      Files: Files
    });
  }

  componentDidMount() {
    this.handleFiles();
  }

  listOpen() {
    console.log(this.state.Files);
    return (
      <Box style={{ width: "840px", backgroundColor: "white" }}>
        {this.state.Files.map(({ File }) => (
          <Box>
            <Typography style={{ fontSize: "25px" }}>{File}</Typography>
          </Box>
        ))}
      </Box>
    );
  }

  handleListOpen() {
    if (this.state.ListOpen === false) {
      this.setState({
        ListOpen: true
      });
    } else {
      this.setState({
        ListOpen: false
      });
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
            display: "flex"
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
              marginLeft: "15px"
            }}
          >
            <ListIcon />
          </Box>
        </Box>
        {this.state.ListOpen ? this.listOpen() : null}
      </Box>
    );
  }
}
