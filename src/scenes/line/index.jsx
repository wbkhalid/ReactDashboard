import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

const Line = () => {
  return (
    <Box>
      <Header title="Line" subTitle="Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
