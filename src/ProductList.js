import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
