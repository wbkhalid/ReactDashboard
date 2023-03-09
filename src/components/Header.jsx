import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
        <Typography variant='h4' color={colors.grey[300]} fontWeight='bold'>{title}</Typography>
        <Typography variant='subtitle1' color={colors.grey[300]} fontWeight='bold'>{subTitle}</Typography>
    </Box>
  )
};

export default Header;
