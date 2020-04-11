import React from "react";
import { Box } from "@material-ui/core";
import CanvasJSReact from "../../../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class CGPA extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

data() {
    const temp =  JSON.parse(localStorage.getItem(this.props.student))
    console.log(temp)
}

componentDidMount() {
    this.data()
}

  render() {
    const options = {
      title: {
        text: "Basic Column Chart in React",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Apple", y: 10 },
            { label: "Orange", y: 15 },
            { label: "Banana", y: 25 },
            { label: "Mango", y: 30 },
            { label: "Grape", y: 28 },
          ],
        },
      ],
    };
    return <Box style={{width:"871px", height:"550px"}} >
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
    </Box>;
  }
}
