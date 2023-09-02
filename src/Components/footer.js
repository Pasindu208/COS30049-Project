import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#6E7E85",
    color: "white",
    textAlign: "center",
    padding: theme.spacing(2),
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      &copy;2023 Group 2-44. All rights reserved.
    </footer>
  );
};

export default Footer;
