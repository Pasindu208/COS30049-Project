import React from "react";
import "../Styles/submitContent.css";

const SubmitContent = () => {
    return (
        <div>
            <div className="contact-section">
                <h2>Upload your Smart Contract</h2>
                <p>
                    Get your smart contract security audit report, and identify
                    vulnerabilities in the contract code. Get recommendations on
                    issues to address potential vulnerabilities in the smart
                    contract.
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
                <input type="file" accept=".sol" />
                <button type="submit">Submit</button>
            </div>
        </div>
    );
};

export default SubmitContent;
