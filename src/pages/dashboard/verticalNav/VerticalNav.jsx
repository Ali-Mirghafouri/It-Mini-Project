import React from "react";
import { Box, List, Typography, Drawer } from "@material-ui/core";
import { VerticalNavCardInfo } from "../../../dummyData/Dummy";
import VerticalNavItem from "./VerticalNavItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import { KenangaLogo } from "../../Assets/icons"

export default class VerticalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box>
        <AppBar position="fixed" style={{ zIndex: 10111 }}>
          <Toolbar>
            <IconButton
              edge="start"
              // className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6">News</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
          <Drawer
            variant="permanent"
            anchor="left"
            style={{ display: "block" }}
          >
            <Box
              style={{
                backgroundColor: "#524d4d",
                height: "100%",
                paddingTop: "60px",
                width:"50px"
              }}
            >
              <Box>
                <List>
                  {VerticalNavCardInfo.map(({ id, Option, logo }) => (
                    <VerticalNavItem
                      key={id}
                      id={id}
                      logo={logo}
                      Option={Option}
                      changePageID={this.props.changePageID}
                      choice={this.props.pageID}
                      updateChoice={this.props.updateChoice}
                    />
                  ))}
                </List>
              </Box>
            </Box>
          </Drawer>
      </Box>
    );
  }
}
