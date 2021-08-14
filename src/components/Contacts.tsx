import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Avatar from "@material-ui/core/Avatar";
import { green, blue, purple, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
  grey: {
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
  },
}));

const Contacts: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h4">Contacts</Typography>
        </Box>
        <Box display="flex" justifyContent="center" color="red" p={1}>
          <Typography variant="h5" color="inherit">
            Follow me!
          </Typography>
        </Box>
        <Box
          className={classes.root}
          display="flex"
          justifyContent="center"
          p={1}
        >
          <Link href="https://twitter.com/halpi17" color="inherit">
            <Avatar className={classes.blue}>
              <TwitterIcon />
            </Avatar>
          </Link>
          <Link href="https://github.com/halpi17" color="inherit">
            <Avatar className={classes.grey}>
              <GitHubIcon />
            </Avatar>
          </Link>
          {/* <Link href="#" color="inherit">
            <Avatar className={classes.purple}>
              <GitHubIcon />
            </Avatar>
          </Link> */}
        </Box>
        <Box display="flex" justifyContent="center" color="red" p={1}>
          <Typography variant="h5" color="inherit">
            E-mail
          </Typography>
        </Box>
        <Box
          className={classes.root}
          display="flex"
          justifyContent="center"
          p={1}
        >
          <Link color="inherit">
            <Avatar className={classes.green}>
              <MailIcon />
            </Avatar>
          </Link>
          <Box display="flex" justifyContent="center" p={1}>
            nishiyamaymyt ※ gmail.com ("※" → "@")
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;