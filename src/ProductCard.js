import * as React from 'react';
import { Box, Paper, Typography, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function ProductCard({ product }) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Paper elevation={3} sx={{ padding: 2, height: "100%", borderRadius: 2, backgroundColor: "#ffffff" }}>
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={1.5}>
        <img src={product.image} alt={product.title} width="100" style={{ height: "100px", objectFit: "contain" }} />
        <div>
          <Typography variant="body2" fontWeight="bold" noWrap sx={{ width: "140px", display: "block" }}>
            {product.title}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.5, mb: 1 }}>
            Price: \${product.price}
          </Typography>

          <Box sx={{ width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Rating
              name={`hover-feedback-${product.id}`}
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ ml: 1, fontSize: "0.75rem", fontWeight: "bold" }}>
                {labels[hover !== -1 ? hover : value]}
              </Box>
            )}
          </Box>
        </div>
      </Box>
    </Paper>
  );
}

export default ProductCard;
