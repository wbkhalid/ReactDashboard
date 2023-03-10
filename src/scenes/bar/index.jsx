import { Box } from '@mui/material';
import React from 'react';
import BarChart from '../../components/BarChart';
import Header from '../../components/Header';

const Bar = () => {
  return (
    <Box>
      <Header title="Bar" subTitle="Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
