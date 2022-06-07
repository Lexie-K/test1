import { Card, Grid } from "@mui/material";
import React from "react";

const Sections = () => {
  return (
  <Grid container rowSpacing={2.5} columnSpacing={3}>
    <Grid item xs={4}>
      <Card sx={{ height: '400px', bgcolor:"green", p:'10px'}}>Content 1</Card> 
    </Grid>

    <Grid item xs={8}> 
      <Card sx={{ height: '400px', bgcolor:"skyblue", p:'10px' }}>Content 2</Card> 
    </Grid>

    <Grid item xs={12}> 
      <Card sx={{ height: '400px', bgcolor:"pink", p:'10px' }}>Content 3</Card> 
    </Grid>
  </Grid>
  );
};

export default Sections;
