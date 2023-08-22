
import React, { useEffect, useState } from 'react';
import { fetchAllTrains } from '../api';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material'; 
import { useStyles } from '../styles'; 

const AllTrains = () => {
  const [trains, setTrains] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllTrains();
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching all trains:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {trains.map((train) => (
          <Grid item key={train.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6">{train.name}</Typography>
                <Typography>Departure: {train.departureTime}</Typography>
                <Typography>Price: ${train.price}</Typography>
                <Typography>Seats Available: {train.seatsAvailability}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllTrains;
