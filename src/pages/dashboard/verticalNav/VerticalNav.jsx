import React from "react"
import { Box, List, Typography, Drawer, IconButton } from "@material-ui/core"
import { VerticalNavCardInfo } from "../../../dummyData/Dummy"
import { VerticalNavCardInfoAdmin } from "../../../dummyData/Dummy"
import VerticalNavItem from "./VerticalNavItem"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import HelpLogoSmall from "../../../assets/HelpLogoSmall.png"
import { LogOutIcon } from "../../../assets/icons"
import "./VerticalNavStyle.css"

export default class VerticalNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      student: JSON.parse(localStorage.getItem(this.props.student)),
      visible: "none",
    }
  }

  handleVisible() {
    if (this.state.visible === "none") {
      this.setState({
        visible: "",
      })
    } else {
      this.setState({
        visible: "none",
      })
    }
  }

  handleDrawerOpen() {
    if (this.state.drawerOpen === false) {
      this.setState({
        drawerOpen: true,
      })
    }
  }

  handleDrawerClose() {
    if (this.state.drawerOpen === true) {
      this.setState({
        drawerOpen: false,
      })
    }
  }

  render() {
    return (
      <Box>
        <AppBar
          display="block"
          position="fixed"
          style={{ zIndex: 10111, backgroundColor: "#540000" }}
        >
          <Toolbar>
            <Box
              style={{
                width: "100%",
              }}
            >
              <Box
                style={{
                  height: "114px",
                  width: "256px",
                  backgroundImage: `url(${HelpLogoSmall})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "500px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "28px",
                }}
              >
                <Box
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "black",
                    borderRadius: "100%",
                    marginRight: "28px",
                  }}
                />
                <Box>
                  <Typography style={{ textAlign: "center" }}>
                    {this.state.student.Name}
                  </Typography>
                  <Box onClick={() => this.props.LogInCheck()}>
                    <Typography
                      style={{
                        textAlign: "center",
                        display: this.state.visible,
                      }}
                    >
                      Log Out
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <IconButton onClick={() => this.handleVisible()}>
                  <LogOutIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" anchor="left" style={{ display: "block" }}>
          <Box
            onMouseOver={() => this.handleDrawerOpen()}
            onMouseLeave={() => this.handleDrawerClose()}
            className="drawerOpen"
          >
            <Box>
              <List>
                {this.props.client === "student"
                  ? VerticalNavCardInfo.map(({ id, Option, logo }) => (
                      <VerticalNavItem
                        key={id}
                        id={id}
                        logo={logo}
                        Option={Option}
                        changePageID={this.props.changePageID}
                        choice={this.props.pageID}
                        drawerOpen={this.state.drawerOpen}
                      />
                    ))
                  : VerticalNavCardInfoAdmin.map(({ id, Option, logo }) => (
                      <VerticalNavItem
                        key={id}
                        id={id}
                        logo={logo}
                        Option={Option}
                        changePageID={this.props.changePageID}
                        choice={this.props.pageID}
                        drawerOpen={this.state.drawerOpen}
                      />
                    ))}
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>
    )
  }
}
