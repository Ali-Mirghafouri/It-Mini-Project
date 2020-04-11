import React from "react";
import { Box } from "@material-ui/core";
import CanvasJSReact from "../../../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class CourseProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: JSON.parse(localStorage.getItem(this.props.student)),
      dataPoints: null,
    };
  }

  pushdata() {
    let dataPoints = [];
    for (var i = 0; i < this.state.student.CourseProgress.length; i++) {
      console.log(this.state.student);
      dataPoints.push({
        y: this.state.student.CourseProgress[i].y,
        indexLabel: this.state.student.CourseProgress[i].indexLabel,
      });
    }
    this.setState(
      {
        dataPoints: dataPoints,
      },
      () => console.log(this.state.dataPoints)
    );
  }

  componentDidMount() {
    this.pushdata();
  }

  render() {
    const options = {
      // theme: "light2",
      backgroundColor: "#DCDCDC",
      title: {
        text: "Course Progress",
        verticalAlign: "center",
        horizontalAlign: "center",
      },
      //         axisY: {
      //     interval: 0.5,
      //     maximum: 4
      //   },
      //   axisX: {
      //             prefix:"sem ",
      //             interval: 1
      //         },
      data: [
        {
          type: "doughnut",

          dataPoints: this.state.dataPoints,
        },
      ],
    };
    return (
      <Box>
        <CanvasJSChart
          options={options}
          /* onRef = {ref => this.chart = ref} */
        />
      </Box>
    );
  }
}
