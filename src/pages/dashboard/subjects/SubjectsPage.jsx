import React from "react";
import { Box, Typography } from "@material-ui/core";
import SubjectsCard from "./SubjectCard";
import { SubjectEnrolled } from "../../../dummyData/Dummy";
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
      showSubject: false
    };
  }

  handleAccessSubject(obj) {
    this.setState(
      {
        AccessSubject: obj,
        showSubject: true
      },
      () => console.log(this.state.AccessSubject)
    );
  }

  render() {
    if (this.state.showSubject === false) {
      return (
        <Box>
          <Box style={{ padding: "88px 91px" }}>
            <Typography style={{ fontSize: "73px", fontWeight: "bold" }}>
              MY SUBJECTS
            </Typography>
          </Box>
          <Box style={{ display: "flex" }}>
            {SubjectEnrolled.map(
              ({
                id,
                Subject,
                SubjectName,
                Lecturer,
                Email,
                Lectures,
                Toturial
              }) => (
                <SubjectsCard
                  id={id}
                  Subject={Subject}
                  SubjectName={SubjectName}
                  Lecturer={Lecturer}
                  Email={Email}
                  Lectures={Lectures}
                  Toturial={Toturial}
                  handleAccessSubject={this.handleAccessSubject.bind(this)}
                />
              )
            )}
          </Box>
        </Box>
      );
    } else {
      return (
        <Box>
          <SubjectDetail AccessSubject={this.state.AccessSubject} />
        </Box>
      );
    }
  }
}
