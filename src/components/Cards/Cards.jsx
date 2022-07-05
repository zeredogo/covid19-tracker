import React from 'react';
import './cards.module.css';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Cards = (props) => {
  console.log(props);
  return (
    <div className='containerCard'>
      <Grid container spacing={3} justify='center'>
         <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography varaint='h5'>Real Data</Typography>
            <Typography color='textSecondary' >Real Date</Typography>
            <Typography variant='body2' >Number of active cases of COVID-19</Typography>
          </CardContent>
         </Grid>
      </Grid>
    </div>
  )
}

export default Cards