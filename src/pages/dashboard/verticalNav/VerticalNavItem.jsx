import React from "react";
import { Box, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import "./VerticalNavStyle.css";

export default class VerticalIteamCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      textColor: "white",
      bgColor: "#524d4d"
    };
  }

  hoverTextColor() {
    this.setState({
      //   textColor: "#B95555",
      bgColor: "#B95555"
    });
  }
  hoverTextColorOver() {
    this.setState({
      textColor: "white",
      bgColor: "#524d4d"
    });
  }
  true() {
    if (this.props.id === this.props.choice) {
      this.setState({
        check: true
      });
    }

    if (this.props.id !== this.props.choice) {
      this.setState({
        check: false
      });
    }
  }
  txtcolor() {
    if (this.props.id === this.props.choice) {
      return "white";
    }
    if (this.props.id !== this.props.choice) {
      return "black";
    }
  }
  render() {
    if (this.props.drawerOpen === true) {
      return (
        <Box
          id={"Card" + this.props.id}
          onClick={() => {
            this.props.changePageID(this.props.id);
            this.true();
          }}
          onMouseOver={() => this.hoverTextColor()}
          onMouseLeave={() => this.hoverTextColorOver()}
        >
          <ListItem
            button
            style={{
              marginBottom: "19px",
              paddingRight: "0px",
              marginRight: "22px",
              width: "292px",
              height: "64px",
              marginLeft: "20px",
              fontSize: "15px",
              backgroundColor: this.state.bgColor,
              borderBottom: "1px solid white",
              color: this.state.textColor
            }}
          >
            <ListItemIcon>{this.props.logo}</ListItemIcon>
            <ListItemText
              primary={this.props.Option}
              style={{ width: "100%" }}
            />
          </ListItem>
        </Box>
      );
    } else {
      return (
        <Box id={"Card" + this.props.id}>
          <ListItem
            style={{
              marginBottom: "19px",
              paddingRight: "0px",
              marginRight: "22px",
              width: this.props.drawerOpen ? "292px" : "50px",
              height: "64px",
              marginLeft: "20px",
              fontSize: "15px",
              backgroundColor: "#524d4d"
            }}
          >
            <ListItemIcon>{this.props.logo}</ListItemIcon>
          </ListItem>
        </Box>
      );
    }
  }
}
