import React from "react";
import { Paper, Typography } from "@mui/material";

function UserCard({ user }) {
  return (
    <Paper elevation={2} sx={{ p: 3, my: 2, backgroundColor: "#ffffff" }}>
      <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="body1">
        <span style={{fontWeight:"bold"}}>Email:</span> {user.email}
      </Typography>
      <Typography variant="body1">
        <span style={{fontWeight:"bold"}}>City:</span> {user.address.city}
      </Typography>
    </Paper>
  );
}

export default UserCard;
