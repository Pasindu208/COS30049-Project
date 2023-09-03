import React from "react";
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

const criticalIssues = [
    {
        title: "Critical Issue 1",
        description: "Description of the critical issue 1",
        severity: "High",
        recommendation: "Recommendation for issue 1",
    },
    {
        title: "Critical Issue 2",
        description: "Description of the critical issue 2",
        severity: "Low",
        recommendation: "Recommendation for issue 2",
    },
    {
        title: "Critical Issue 3",
        description: "Description of the critical issue 3",
        severity: "Medium",
        recommendation: "Recommendation for issue 3",
    },
    {
        title: "Critical Issue 4",
        description: "Description of the critical issue 4",
        severity: "Low",
        recommendation: "Recommendation for issue 4",
    },
    {
        title: "Critical Issue 5",
        description: "Description of the critical issue 5",
        severity: "Low",
        recommendation: "Recommendation for issue 5",
    },
    {
        title: "Critical Issue 6",
        description: "Description of the critical issue 6",
        severity: "High",
        recommendation: "Recommendation for issue 6",
    },
    {
        title: "Critical Issue 7",
        description: "Description of the critical issue 7",
        severity: "Medium",
        recommendation: "Recommendation for issue 7",
    },
    {
        title: "Critical Issue 8",
        description: "Description of the critical issue 8",
        severity: "High",
        recommendation: "Recommendation for issue 8",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10vh",
        padding: theme.spacing(2),
        minHeight: "100vh",
    },
}));
function ReportContent() {
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
                                <TableCell>Description</TableCell>
                                <TableCell>Severity</TableCell>
                                <TableCell>Recommendation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {criticalIssues.map((issue, index) => (
                                <TableRow key={index}>
                                    <TableCell>{issue.title}</TableCell>
                                    <TableCell>{issue.description}</TableCell>
                                    <TableCell>{issue.severity}</TableCell>
                                    <TableCell>
                                        {issue.recommendation}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
}

export default ReportContent;
