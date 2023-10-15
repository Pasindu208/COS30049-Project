import React from "react";
import { Alert } from "@mui/material";
import "../Styles/submitContent.css";

class SubmitContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alertMessage: "",
            alertSeverity: "error",
        };
    }
    uploadFile = () => {
        const fileInput = document.getElementById("fileInput");
        const file = fileInput.files[0];

        if (!file) {
            this.setState({
                alertMessage: "Please select a file.",
                alertSeverity: "error",
            });
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        fetch("http://127.0.0.1:5000/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                    alertMessage: data.result || data.error,
                    alertSeverity: data.result ? "success" : "error",
                });
            })
            .catch((error) => {
                this.setState({
                    alertMessage: "File upload failed. Please try again.",
                    alertSeverity: "error",
                });
            });
    };

    render() {
        return (
            <div>
                <div className="contact-section">
                    <h2>Upload your Smart Contract</h2>
                    <p>
                        Get your smart contract security audit report, and
                        identify vulnerabilities in the contract code. Get
                        recommendations on issues to address potential
                        vulnerabilities in the smart contract.
                    </p>
                </div>

                <div className="submit-section">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Primary Contact Number" />
                    <input type="text" placeholder="Job Title" />
                    <input type="text" placeholder="Company Name" />
                    <input type="text" placeholder="Country" />
                    <input type="text" placeholder="Project Name" />
                    <input
                        type="date"
                        placeholder="Expected Project Completion Date"
                    />
                    <select>
                        <option value="">Are you using Solidity?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label for="fileInput">Choose a file:</label>
                    <input
                        type="file"
                        id="fileInput"
                        name="fileInput"
                        accept=".sol"
                    />

                    <button type="button" onClick={this.uploadFile}>
                    Submit
                    </button>
                    {this.state.alertMessage?
                                    <Alert
                                    severity={this.state.alertSeverity}
                                >
                                    {this.state.alertMessage}
                                </Alert>:""
                    }

                </div>
            </div>
        );
    }
}

export default SubmitContent;




