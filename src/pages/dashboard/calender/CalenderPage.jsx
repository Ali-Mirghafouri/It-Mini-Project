import React from "react"
import { Box } from "@material-ui/core"
import WeeklyCalender from "./WeeklyCalender"
import Calender from "./Calender"
import UpComingEvent from "./UpComingEvent"

export default class CalenderPage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Box>
        <Box style={{ margin: "0px 10px" }}>
          <WeeklyCalender />
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
