import React, { useState } from "react";
import { Button, Typography, Collapse, Box, Paper } from "@mui/material";

function StudentCard({ name, username, email, address }) {
  const [show, setShow] = useState(false);

  const formatAddress = () => {
    if (!address) return "N/A";
    if (typeof address === "string") return address;
    return [address.suite, address.street, address.city].filter(Boolean).join(", ") || "N/A";
  };

  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {name}
        </Typography>
        <Button size="small" variant="outlined" color={show ? "secondary" : "primary"} onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </Button>
      </Box>
      
      <Collapse in={show} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid #e0e0e0", display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Username:</strong> {username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Email:</strong> {email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Address:</strong> {formatAddress()}
          </Typography>
        </Box>
      </Collapse>
    </Paper>
  );
}

export default StudentCard;
