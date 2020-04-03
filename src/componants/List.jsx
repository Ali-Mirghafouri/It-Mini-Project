import React from "react";
import { Box, Typography } from "@material-ui/core";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListOpen: false
    };
  }

  render() {
    if (this.state.ListOpen === false) {
      return (
        <Box>
          <Box style={{ width: "840px", height: "72px", backgroundColor: "#DE3737", border:"1px solid black"}}>
            {this.props.Text}
          </Box>
        </Box>
      );
    }
  }
}
