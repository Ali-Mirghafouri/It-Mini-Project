import React from "react"
import { Box } from "@material-ui/core"
import WeeklyCalender from "./WeeklyCalender"
import Calender from "./Calender"
import UpComingEvent from "./UpComingEvent"

export default class CalenderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Box>
        <Box style={{ margin: "0px 10px" }}>
          <WeeklyCalender student={this.props.student} />
        </Box>
        <Box
          style={{
            marginTop: "32px",
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Calender />
          <Box style={{ marginLeft: "37px" }}>
            <UpComingEvent changePageID={this.props.changePageID} />
          </Box>
        </Box>
      </Box>
    )
  }
}
