from flask import Flask, request, jsonify
import subprocess
import os
import mysql.connector
import re
from flask_cors import CORS
import datetime

decodedstring = ""

db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'password',
    'database': 'Audits',
}

app = Flask(__name__)
CORS(app)


@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if a file was posted
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    # Save the file temporarily
    print(file.filename)
    # file_path = os.path.join("/tmp", file.filename)
    file_path = file.filename
    file.save(file_path)

    # Run Slither on the file and generate a markdown report
    report_path = file_path + ".md"
    print(report_path)
    command = ["slither", file_path, "--checklist"]
    process = subprocess.Popen(
        command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()

    # if process.returncode != 0:
    #     print(stderr.decode("utf-8"))
    #     print(stdout.decode("utf-8"))
    #     return jsonify({"error": stderr.decode("utf-8")}), 500

    # with open(report_path, 'r') as f:
    #     report = f.read()

    # os.remove(file_path)  # Clean up the uploaded file
    # os.remove(report_path)  # Clean up the generated report
    print(stdout)

    connection = mysql.connector.connect(
        user='root', password='password', host='127.0.0.1', database='Audits', auth_plugin='mysql_native_password')

    cursor = connection.cursor()

    if connection.is_connected():
        print('Connected to MySQL database')

    else:
        print("Not connected")

    # return jsonify({"report": stdout.decode("utf-8")})
    decodedstring = jsonify({"report": stdout.decode("utf-8")})

    decodedstring = decodedstring.data.decode('utf-8')
    # print("hi")
    # print(decodedstring)

    # Regular expression pattern
    # pattern = r'## (.*?)\r\nImpact: (.*?)\r\nConfidence: (.*?)\r\n'
    pattern = r'## (.*?)\\r\\nImpact: (.*?)\\r\\nConfidence: (.*?)\\r\\n'

    # print(decodedstring)

    # Find all matches
    matches = re.findall(pattern, decodedstring)

    # Extracted data
    # for match in matches:
    #     issue_title, severity, confidence = match
    #     print(f"Issue Title: {issue_title}")
    #     print(f"Severity: {severity}")
    #     print(f"Confidence: {confidence}")
    #     print("----")

    for match in matches:
        issue_title, severity, confidence = match
        insert_query = "INSERT INTO Vulnerabilities (type, severity, confidence) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (issue_title, severity, confidence))

    current_date = datetime.datetime.now().date()

    insert_query = "INSERT INTO SmartContracts (contract_name, upload_date) VALUES (%s, %s)"
    cursor.execute(insert_query, (file_path, current_date))

    connection.commit()
    cursor.close()
    connection.close()

    # return decodedstring
    return jsonify({"result": "Success"}), 200


@app.route('/vulnerabilities', methods=['GET'])
def get_vulnerabilities():
    connection = mysql.connector.connect(
        user='root', password='password', host='127.0.0.1', database='Audits', auth_plugin='mysql_native_password')

    cursor = connection.cursor()

    if connection.is_connected():
        print('Connected to MySQL database')

    else:
        print("Not connected")

    # get_query = "SELECT * FROM Vulnerabilities"
    get_query = "SELECT V.type AS Vulnerability_Type, V.severity, V.confidence, R.recommendation FROM Vulnerabilities V INNER JOIN Recommendations R ON V.type = R.type"
    # cursor.execute(get_query)
    cursor.execute(get_query)
    vulnerabilities = cursor.fetchall()

    get_query2 = "SELECT contract_name, upload_date FROM SmartContracts"
    cursor.execute(get_query2)
    contracts = cursor.fetchall()

    cursor.close()
    connection.close()
    data = [{'contracts': contracts, 'data': vulnerabilities}]
    return jsonify(data), 200


if __name__ == '__main__':
    app.run(debug=True)
