import * as React from "react";
import './fileUpload.css'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function FileUpload() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload File
        <input hidden accept=".sol" type="file" />
      </Button>
    </Stack>
  );
}
