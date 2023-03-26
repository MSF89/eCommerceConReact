import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../Functions/Datos';

const margin = {
  margin: "1em",
  marginTop: "6em"
}




export default function Products() {
  
  return (
    <Box style={margin} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       { 
          products.map(product => (
            <Grid  item xs={12} sm={6} md={4} lg={3}>
             <Product key={product.id} product={product} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}