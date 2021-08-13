import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { CssBaseline, Slide, useScrollTrigger } from "@material-ui/core";

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
    width: 1400,
    maxWidth: "100%",
  },
});

const Navbar: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          className={classes.root}
          color="default"
          style={{ alignItems: "center" }}
        >
          <Toolbar>
            <Button href="/">halpi's page</Button>
            <AnchorLink
              href="#about"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button>About</Button>
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
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
