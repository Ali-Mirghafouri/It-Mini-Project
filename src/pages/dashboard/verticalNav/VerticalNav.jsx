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
                width: "390px",
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
                <Typography>Student Name</Typography>
              </Box>
              <Box>
                <IconButton>
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
