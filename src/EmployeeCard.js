import React from "react";
import { Box, Paper, Typography, IconButton, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import EmployeeSkills from "./EmployeeSkills";

function EmployeeCard({ employee }) {
  return (
    <Box style={{marginLeft:"550px",marginTop:"250px"}} display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: "#f5f5f5" }}>
      <Paper elevation={4} sx={{ padding: 4, width: 320, textAlign: "center", borderRadius: 3, backgroundColor: "#ffffff" }}>
        <div>
          <IconButton>
            <Badge badgeContent={100} color="secondary" max={99}>
              <MailIcon />
            </Badge>
          </IconButton>
          
          <Typography style={{fontWeight:"bold"}} variant="h5" fontWeight="bold" gutterBottom color="primary">
            Employee Details
          </Typography>
          <Typography variant="body1" sx={{ my: 1 }}>
            <span style={{fontWeight:"bold", marginRight:"10px"}} >Name:</span> {employee.name}
          </Typography>
          <Typography variant="body1" sx={{ my: 1 }}>
           <span style={{fontWeight:"bold"}}>  Role:</span> {employee.role}
          </Typography>
          <Typography variant="body1" sx={{ my: 1 }}>
           <span style={{fontWeight:"bold"}}> Salary: ₹</span> {employee.salary}
          </Typography>

          <EmployeeSkills skills={employee.skills} />
        </div>
      </Paper>
    </Box>
  );
}

export default EmployeeCard;
