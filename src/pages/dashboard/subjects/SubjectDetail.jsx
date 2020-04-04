import React from "react";
import { Box, Typography } from "@material-ui/core";
import List from "../../../componants/List"

export default class SubjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ListOptions: [
            {
                Text: "Lectures",
                Files: this.props.AccessSubject.Lectures
            },
            {
                Text: "Toturial",
                Files: this.props.AccessSubject.Toturial
            }
        ]
    };
  }

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
        <Box  >
          <Box>
            <Typography style={{fontSize:"90px", fontWeight:"500px", textDecoration:"underline"}} >{this.props.AccessSubject.Subject}</Typography>
            <Typography style={{fontSize:"50px", fontWeight:"100px", textDecoration:"underline"}} >{this.props.AccessSubject.SubjectName}</Typography>
            <Typography><span style={{fontSize:"35px", fontWeight:"bold"}} >Lecturer:</span><span style={{fontSize:"30px"}} >{this.props.AccessSubject.Lecturer}</span></Typography>
            <Typography><span style={{fontSize:"35px", fontWeight:"bold"}} >Email:</span><span style={{fontSize:"30px"}} >{this.props.AccessSubject.Email}</span></Typography>
          </Box>
          <Box style={{display:"flex"}} >
            {this.state.ListOptions.map(({Text, Files}) => (
                <List
                Text={Text}
                Files={Files}
                />
            ))}
          </Box>
        </Box>
    );
  }
}
