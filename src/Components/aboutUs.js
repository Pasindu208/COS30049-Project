import React from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
    },
    card: {
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    Container: {
        marginTop: "20px",
    }
}));

const GroupMembers = () => {
    const classes = useStyles();

    const groupMembers = [
        { name: "Pasindu Gamage", email: "103819717@student.swin.edu.au" },
        { name: "Puladitha Silva", email: "104187884@student.swin.edu.au" },
        {
            name: "Md Nahidur Rahman Aurnab",
            email: "103849604@student.swin.edu.au",
        },
    ];

    return (
        <Container maxWidth="md" className={classes.root}>


            <Typography variant="h4" gutterBottom className={classes.title}>
                Group 2 - 44
            </Typography>

            {groupMembers.map((member, index) => (
                <Card className={classes.card} key={index}>
                    <CardContent>
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {member.email}
                        </Typography>
                    </CardContent>
                </Card>
            ))}


            <Typography variant="h4" gutterBottom >
                COS30049-Project
            </Typography>
            <Container>
                <Typography variant="h5" gutterBottom>
                    Smart Contract Audit System
                </Typography>
                <Typography variant="body1" style={{ textAlign: "justify" }} gutterBottom>
                    The Smart Contract Audit System aims to assist users in identifying potential vulnerabilities in smart contract code. The platform should provide a responsive website that allows users to upload their smart contract code. By utilizing existing smart contract static analysis tools, the platform can rapidly analyze the contract code and identify potential issues. Users can view the detection results on the website, enabling them to promptly identify and address any vulnerabilities in their contracts.
                </Typography>
            </Container>
            <Container className={classes.Container}>
                <Typography variant="h5" gutterBottom>
                    Core Functional Requirements:
                </Typography>
                <Typography className={classes.textCont} gutterBottom>
                    <List>
                        <ListItem>
                            <ListItemText primary="1. Users can submit their smart contracts for auditing, and the system should accept smart contract files in common formats like Solidity (.sol)." style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="2. The system will employ static analysis techniques to assess smart contracts for potential vulnerabilities and security risks." style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="3. The system should display comprehensive audit reports on a dedicated page, emphasizing the identified vulnerabilities and their respective categories." style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="4. The system needs to provide corresponding suggestions for each vulnerability category." style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="5. Users should be able to retrieve previous reports" style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                    </List>
                </Typography>
            </Container>
            <Container className={classes.Container}>
                <Typography variant="h5" gutterBottom>
                    Pages
                </Typography>
                <Typography className={classes.textCont} gutterBottom>
                    <List>
                        <ListItem>
                            <ListItemText primary="1. Home page" style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="2. Submit Solidity files (.sol)" style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="3. Report page Previous reports and current Suggestions for vulnerabilities" style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="4. About us" style={{ lineHeight: 1, margin: 0 }} />
                        </ListItem>
                    </List>
                </Typography>
            </Container>
        </Container>
    );
};

export default GroupMembers;
