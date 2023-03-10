import { Box } from '@mui/material';
import React from 'react';
import GeoGraphyChart from '../../components/GeoGraphyChart';
import Header from '../../components/Header';

const GeoGraphy = () => {
  return (
    <Box>
      <Header title="GeoGraphy" subTitle="GeoGraphy Chart" />
      <Box height="75vh">
        <GeoGraphyChart />
      </Box>
    </Box>
  );
};

export default GeoGraphy;
