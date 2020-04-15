import React from "react";
import { Box, Typography } from "@material-ui/core";
import SubjectsCard from "./SubjectCard";
import SubjectDetail from "./SubjectDetail";

export default class Subjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AccessSubject: {
        // id: null,
        // Subject: null,
        // SubjectName: null,
        // Lecturer: null,
        // Email: null,
        // Lectures: null,
        // Toturial: null
      },
      showSubject: false,
      student: JSON.parse(localStorage.getItem(this.props.student)),
    };
  }

  handleAccessSubject(obj) {
    this.setState(
      {
        AccessSubject: obj,
        showSubject: true,
      },
      () => console.log(this.state.AccessSubject)
    );
  }

  handleShowSubject() {
    this.setState({
      showSubject: false,
    })
  }

  render() {
    if (this.state.showSubject === false) {
      return (
        <Box>
          <Box style={{ padding: "80px 85px" }}>
            <Typography style={{ fontSize: "73px", fontWeight: "bold" }}>
              MY SUBJECTS
            </Typography>
          </Box>
          <Box style={{ display: "flex" }}>
            {this.state.student.subjects.map(
              ({
                description,
                Subject,
                Lecturer,
                Email,
                Lectures,
                Toturial,
                Grade,
                id
              }) => (
                <SubjectsCard
                  obj={this.state.student.subjects[id]}
                  mark={Grade}
                  Subject={Subject}
                  SubjectName={description}
                  Lecturer={Lecturer}
                  Email={Email}
                  Lectures={Lectures}
                  Toturial={Toturial}
                  handleAccessSubject={this.handleAccessSubject.bind(this)}
                />
              )
            )}
          </Box>
          {/* <Box style={{width:"100%", height:"22px"}} /> */}
        </Box>
      );
    } else {
      return (
        <Box>
          <SubjectDetail AccessSubject={this.state.AccessSubject}  handleShowSubject={this.handleShowSubject.bind(this)}/>
        </Box>
      );
    }
  }
}
