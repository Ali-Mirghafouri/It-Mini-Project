import React from "react";
import { Box } from "@material-ui/core";
import CGPA from "./CGPA";
import PersonalInfo from "./PersonalInfo";
import CourseProgress from "./CourseProgress";
import Attendence from "./Attendence";
import SubjectProgress from "./SubjectProgress";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: JSON.parse(localStorage.getItem(this.props.student)),
    };
  }

  render() {
    return (
      <Box>
        <Box display="flex">
          <PersonalInfo student={this.props.student} />
          <Box style={{width:"400px", height:"400px"}} >
            <CourseProgress student={this.props.student} />
          </Box>
          <Box style={{width:"600px", height:"300px"}}  >
            <Attendence student={this.props.student} />
          </Box>
        </Box>
        <Box display="flex"  >
          <SubjectProgress student={this.props.student} />
        <Box style={{width:"100%", display:"flex", alignItems:"flex-end", justifyContent:"flex-end", marginRight:"25px"}} >
          <CGPA student={this.props.student} />
        </Box>
        </Box>
      </Box>
    );
  }
}
