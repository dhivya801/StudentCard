import React from "react";
import { Box, Typography } from "@mui/material";
import ProductList from "./ProductList";

function Dashboard({ products, loading }) {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" component="h1" fontWeight="bold" align="center" gutterBottom color="primary">
        Product Dashboard
      </Typography>
      {loading ? (
        <Typography variant="body1" align="center">Loading products...</Typography>
      ) : (
        <ProductList products={products} />
      )}
    </Box>
  );
}

export default Dashboard;
