import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import headerImage from "../images/headerImage.jpg";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        marginTop: "10vh",
        width: "100%",
        padding: theme.spacing(2),
    },
    grid: {
        height: "90vh",
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            height: "100%",
        },
    },
    gridItemTop: {
        position: "relative",
        height: "70%",
        width: "100%",
        [theme.breakpoints.down("xs")]: {
            height: "auto",
        },
    },
    gridItemBottom: {
        position: "relative",
        height: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            height: "auto",
            marginBottom: "20px",
        },
    },
    cont: {
        position: "relative",
        height: "100%",
    },
    headerImage: {
        position: "relative",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px",
        [theme.breakpoints.down("xs")]: {
            height: "auto",
        },
    },
    textCont: {
        position: "relative",
        height: "70%",
        color: "#fff",
    },
    descDiv: {
        position: "relative",
        height: "100%",
        padding: "20px",
        fontSize: "1.2rem",
        listStyleType: "disc",
        [theme.breakpoints.down("sm")]: {
            paddingTop: 0,
            fontSize: "1.1rem",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2rem",
        },
    },
    button: {
        color: "white",
        borderRadius: "5px",
        width: "150px",
        height: "50px",
        borderColor: "white",
        letterSpacing: "3px",
    },
}));

const Homemid = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainDiv}>
            <Grid container spacing={2} columns={12} className={classes.grid}>
                <Grid item xs={12} sm={6} className={classes.gridItemTop}>
                    <div className={classes.cont}>
                        <img
                            src={headerImage}
                            className={classes.headerImage}
                            alt="Smart Contract Audits"
                        />
                        {/* reference -> https://www.freepik.com/free-vector/smart-secure-contract-agreement-isometric-flowchart-with-signature-people-shaking-hands-blue-background-3d-vector-illustration_37420777.htm#query=smart%20contract&position=18&from_view=keyword&track=ais  */}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.gridItemTop}>
                    <Grid
                        container
                        spacing={0}
                        columns={12}
                        className={classes.textCont}>
                        <Grid item xs={12}>
                            <div className={classes.descDiv}>
                                <Typography variant="h6" component="div">
                                    Importance of security in smart contracts
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Smart contracts can identify vulnerabilities and security risks."
                                            style={{ lineHeight: 1, margin: 0 }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="We can increase the data privacy because it may contain sensitive data."
                                            style={{ lineHeight: 1, margin: 0 }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="If there is issue, we can decentralize by exposing vulnerabilities that malicious actors can exploit."
                                            style={{ lineHeight: 1, margin: 0 }}
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.descDiv}>
                                <Typography variant="h6" component="div">
                                    What we offer
                                </Typography>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemText
                                            primary="Assess smart contracts for potential vulnerabilities and security risks. "
                                            style={{ lineHeight: 1, margin: 0 }}
                                        />
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <ListItemText
                                            primary="Providing comprehensive audit for vulnerabilities and security risks."
                                            style={{ lineHeight: 1, margin: 0 }}
                                        />
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <ListItemText
                                            primary="Providing suggestions for every vulnerability category."
                                            style={{ lineHeight: 1, margin: 0 }}
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.gridItemBottom}>
                    <Link to="/submit">
                        <Button variant="outlined" className={classes.button}>
                            Submit
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Homemid;
