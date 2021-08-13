import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Box, Slide, useScrollTrigger } from "@material-ui/core";

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: "8px",
    maxWidth: "100%",
  },
  tabs: {
    margin: "auto",
    width: "80%",
  },
});

const Navbar: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.root} color="default">
          <Toolbar className={classes.tabs}>
            <Box position="absolute" marginLeft="10px">
              <Button href="/">halpi's page</Button>
            </Box>
            <Box
              color="blue"
              style={{ flexGrow: 1, textAlign: "right", marginRight: "10px" }}
            >
              <AnchorLink
                href="#about"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button color="inherit">About</Button>
              </AnchorLink>
              <AnchorLink
                href="#skills"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button color="inherit">Skills</Button>
              </AnchorLink>
              <AnchorLink
                href="#works"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button color="inherit">Works</Button>
              </AnchorLink>
              <AnchorLink
                href="#contacts"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button color="inherit">Contacts</Button>
              </AnchorLink>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
