import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

const auditReport = {
    contractName: "SampleContract",
    auditDate: "2023-09-01",
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10vh",
        padding: theme.spacing(2),
        minHeight: "100vh",
    },
}));
function ReportContent() {
    const [vulnerabilities, setVulnerabilities] = useState(null);

    useEffect(() => {
        const fetchVulnerabilities = async () => {
            try {
                const response = await fetch('http://localhost:5000/vulnerabilities');
                const jsonData = await response.json();
                setVulnerabilities(jsonData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchVulnerabilities();
    }, []);

    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
            <Typography
                variant="h4"
                align="center"
                color={"white"}
                gutterBottom>
                Security Audit Report
            </Typography>

            <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h5" gutterBottom>
                    Contract Information
                </Typography>
                <Typography>
                    Contract Name: {auditReport.contractName}
                </Typography>
                <Typography>Audit Date: {auditReport.auditDate}</Typography>

                <Typography
                    variant="h5"
                    gutterBottom
                    style={{ marginTop: "20px" }}>
                    Critical Issues
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Severity</TableCell>
                                <TableCell>Confidence</TableCell>
                                <TableCell>Recommendation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {vulnerabilities ? vulnerabilities.map((issue, index) => (
                                <TableRow key={index}>
                                    <TableCell>{issue[1]}</TableCell>
                                    <TableCell>{issue[2]}</TableCell>
                                    <TableCell>
                                        {issue[3]}
                                    </TableCell>
                                    <TableCell>
                                        Reduce cyclomatic complexity by splitting the function into several smaller subroutines.
                                    </TableCell>
                                </TableRow>
                            )) :
                                <TableRow>
                                    <TableCell colSpan={4} align="center">Loading...</TableCell>
                                </TableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
}

export default ReportContent;