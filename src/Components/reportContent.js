import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableSortLabel
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
    const [contracts, setContracts] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const fetchVulnerabilities = async () => {
            try {
                const response = await fetch('http://localhost:5000/vulnerabilities');
                const jsonData = await response.json();
                const valuerabilityData = jsonData[0].data;
                const contractsData = jsonData[0].contracts
                setContracts(contractsData);
                // Sort the data based on initial load
                const sortedData = valuerabilityData.sort((a, b) => {
                    if (sortBy !== null) {
                        if (a[sortBy] < b[sortBy]) {
                            return sortOrder === 'asc' ? -1 : 1;
                        }
                        if (a[sortBy] > b[sortBy]) {
                            return sortOrder === 'asc' ? 1 : -1;
                        }
                    }
                    return 0;
                });
                setVulnerabilities(sortedData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchVulnerabilities();
    }, [sortBy, sortOrder]);

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(field);
            setSortOrder("asc");
        }
    };

    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
            <Typography variant="h4" align="center" color={"primary"} gutterBottom>
                Security Audit Report
            </Typography>

            <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h5" gutterBottom>
                    Contract Information
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Contract Name</TableCell>
                                <TableCell>AuditDate</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contracts ? contracts.map((contract, index) => (
                                <TableRow key={index}>
                                    <TableCell>{contract[0]}</TableCell>
                                    <TableCell>{contract[1]}</TableCell>
                                </TableRow>
                            )) :
                                <TableRow>
                                    <TableCell colSpan={4} align="center">Loading...</TableCell>
                                </TableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
                    Critical Issues
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortBy === 0}
                                        direction={sortBy === 0 ? sortOrder : "asc"}
                                        onClick={() => handleSort(0)}
                                    >
                                        Title
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortBy === 1}
                                        direction={sortBy === 1? sortOrder : "asc"}
                                        onClick={() => handleSort(1)}
                                    >
                                        Severity
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortBy === 2}
                                        direction={sortBy === 2 ? sortOrder : "asc"}
                                        onClick={() => handleSort(2)}
                                    >
                                        Confidence
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>Recommendation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {vulnerabilities ? vulnerabilities.map((issue, index) => (
                                <TableRow key={index}>
                                    <TableCell>{issue[0]}</TableCell>
                                    <TableCell>{issue[1]}</TableCell>
                                    <TableCell>{issue[2]}</TableCell>
                                    <TableCell>{issue[3]}</TableCell>
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