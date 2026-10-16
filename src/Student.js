import React from "react";
import { Box, Paper, Typography } from "@mui/material";

function Student({ student }) {
  return (
    
    <Box style={{marginLeft:"550px",marginTop:"250px", padding:"50px"}} display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: "#f0f2f5" }}>
      <Paper elevation={3} sx={{ padding: 4, width: 300, textAlign: "center", borderRadius: 2, backgroundColor: "#1e1e2f", color: "#ffffff" }}>
        <div>
          <Typography style={{fontFamily:"Times New Roman"}} variant="h5" fontWeight="bold" gutterBottom sx={{ color: "#00adb5" }}>
            Student Information
          </Typography>
          <Typography variant="body1" sx={{ my: 1, color: "#eeeeee" }}>
            <span style={{marginRight:"20px"}}>Name:</span> {student.name}
          </Typography>
          <Typography variant="body1" sx={{ my: 1, color: "#eeeeee" }}>
            Department: {student.department}
          </Typography>
        </div>
      </Paper>
    </Box>
  );
}

export default Student;
