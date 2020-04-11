import React from "react";
import { Box } from "@material-ui/core";
import CGPA from "./CGPA"

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box>
        <CGPA student={this.props.student} />
      </Box>
    );
  }
}
