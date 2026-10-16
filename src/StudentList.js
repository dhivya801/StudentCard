import React from "react";
import { Typography, Box } from "@mui/material";
import StudentCard from "./StudentCard";
function StudentList({ students }) {
  if (students.length === 0) {
    return (
      <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 4 }}>
        No students available
      </Typography>
    );
  }
return (
    <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          username={student.username}
          email={student.email}
          address={student.address}
        />
      ))}
    </Box>
  );
}

export default StudentList;
