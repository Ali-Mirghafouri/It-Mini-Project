import React from "react";
import { Box, Typography } from "@material-ui/core";
import CGPA from "./CGPA";
import PersonalInfo from "./PersonalInfo";
import CourseProgress from "./CourseProgress";
import Attendence from "./Attendence";
import SubjectProgress from "./SubjectProgress";
import EditDetails from "./EditDetails"

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayEditPage: false,
      student: JSON.parse(localStorage.getItem(this.props.student)),
    };
  }

  handleDisplayEditPage() {
    this.setState({
      displayEditPage: true
    })
  }

  render() {
    if( this.state.displayEditPage === false){
    return (
      <Box>
        <Box display="flex">
          <PersonalInfo student={this.props.student} handleDisplayEditPage={this.handleDisplayEditPage.bind(this)} />
          <Box style={{width:"350px", height:"350px"}} >
            <CourseProgress student={this.props.student} />
          </Box>
          <Box style={{width:"500px", height:"300px"}}  >
            <Attendence student={this.props.student} />
          </Box>
        </Box>
        <Box style={{display:"grid", gridTemplateColumns:"1fr 1fr"}} >
          <Box style={{marginLeft:"30px"}} >
            <Typography style={{fontSize:"45px", fontWeight:"500", textDecoration:"underline"}} >Active Subjects</Typography>
          </Box>
          <Typography style={{fontSize:"45px", fontWeight:"500", textDecoration:"underline"}} >CGPA</Typography>
        </Box>
        <Box display="flex" style={{marginLeft:"30px"}}   >
          <SubjectProgress student={this.props.student} />
        <Box style={{width:"100%", display:"flex", alignItems:"flex-end", justifyContent:"flex-end", marginRight:"25px", borderLeft:"1px solid #707070"}} >
          <CGPA student={this.props.student} />
        </Box>
        </Box>
      </Box>
    );
  } else {
    return(
      <Box>
        <EditDetails student={this.props.student} />
      </Box>
    )
  }
  }
}
