import React from "react";
import { Box, Typography, Button } from "@mui/material";

function EmployeeSkills({ skills }) {
  return (
    <div>
      <Typography style={{fontWeight:"bold"}} variant="h6" fontWeight="bold" sx={{ mt: 2 }} color="secondary">
        Skills
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={1} sx={{ mt: 1 }}>
        {skills.map((skill, index) => (
          <Button style={{marginRight:"5px"}} key={index} variant="contained" size="small" color="secondary">
            {skill}
          </Button>
        ))}
      </Box>
    </div>
  );
}

export default EmployeeSkills;
