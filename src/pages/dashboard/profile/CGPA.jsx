import React from "react";
import { Box } from "@material-ui/core";
import CanvasJSReact from "../../../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class CGPA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: JSON.parse(localStorage.getItem(this.props.student)),
      dataPoints: null
    };
  }


pushdata() {
  let dataPoints = []
  for (var i = 0; i < this.state.points.CGPA.length; i++) {
    // console.log(i)
    dataPoints.push({
      x: this.state.points.CGPA[i].x,
      y: this.state.points.CGPA[i].y
    });
  }
  this.setState({
    dataPoints: dataPoints
  })

}

componentDidMount() {
    this.pushdata()
}

  render() {
    const options = {
			theme: "light2",
			title: {
				text: "Stock Price of NIFTY 50"
			},
			axisY: {
        interval: 0.5,
        maximum: 4
      },
      axisX: {
				prefix:"sem ",
				interval: 1
			},
			data: [{
        type: "line",
        
				dataPoints: this.state.dataPoints
			}]
		}
    return <Box style={{width:"871px", height:"550px"}} >
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
    </Box>;
  }
}
