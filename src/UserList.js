import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getUsers } from "./Api";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Typography variant="body1">Loading users...</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", p: 2 }}>
      {users.slice(0, 2).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

export default UserList;
