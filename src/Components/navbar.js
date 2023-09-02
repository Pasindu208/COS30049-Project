import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const textColor = "#fff";
const useStyles = makeStyles((theme) => ({
    navbar: {
        position: "fixed",
        zIndex: 999,
        width: "100%",
        height: "10vh",
        top: "0px",
        left: "0px",
        backgroundColor: "#bbbbbb50",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
        [theme.breakpoints.down("xs")]: {
            fontSize: "12px",
        },
    },
    logo: {
        fontFamily: "Lobster",
        color: textColor,
        fontSize: "2rem",
        margin: theme.spacing(1),
    },
    navlinks: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    button: {
        margin: theme.spacing(1),
        border: "1px solid" + textColor,
        color: textColor,
        borderRadius: "5px",
    },
    drawer: {
        width: "250px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    list: {
        width: "100%",
    },
    listItem: {
        textDecoration: "none",
    },
    logoCont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const sideList = () => (
        <div
            className={classes.drawer}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}>
            <div className={classes.logoCont}>
                <Typography
                    variant="h6"
                    className={classes.logo}
                    style={{ color: "black" }}>
                    Smart Audit
                </Typography>
            </div>
            <List className={classes.list}>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/aboutus">
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/submit">
                    <ListItemText primary="Submit" />
                </ListItem>
                <ListItem button component={Link} to="/reports">
                    <ListItemText primary="Reports" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <AppBar className={classes.navbar}>
                <Toolbar
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <Typography variant="h6" className={classes.logo}>
                        Smart Audit
                    </Typography>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>

                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.navlink}>
                            <Button
                                variant="outlined"
                                className={classes.button}>
                                Home
                            </Button>
                        </Link>
                        <Link to="/aboutus" className={classes.navlink}>
                            <Button
                                variant="outlined"
                                className={classes.button}>
                                About
                            </Button>
                        </Link>
                        <Link to="/submit" className={classes.navlink}>
                            <Button
                                variant="outlined"
                                className={classes.button}>
                                Submit
                            </Button>
                        </Link>
                        <Link to="/reports" className={classes.navlink}>
                            <Button
                                variant="outlined"
                                className={classes.button}>
                                Reports
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>

            {/* Drawer for small screens */}
            <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                {sideList()}
            </Drawer>
        </div>
    );
};

export default Navbar;
