import React from "react";
import "../Styles/submitContent.css";

class SubmitContent extends React.Component {
    uploadFile() {
        console.log("hi");
    

    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file.");
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
                // throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("File uploaded successfully:", data);
            alert("File uploaded successfully!");
        });
    // .catch((error) => {
    //     console.error(
    //         "There was a problem with the fetch operation:",
    //         error
    //     );
    //     alert("File upload failed. Please try again.");
    // });

    }
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
                </div>
            </div>
        );
    }
}

export default SubmitContent;
