import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { tokens } from '../../theme';
import { Link } from 'react-router-dom';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import PeopleOutlined from '@mui/icons-material/PeopleOutlined';
import ContactsOutlined from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlined from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
const SideBarPro = () => {
  const { collapseSidebar } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Sidebar style={{ height: '100vh' }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlined />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          ></MenuItem>
          <MenuItem icon={<HomeOutlined />}>Dashboard</MenuItem>
          <Typography variant='h6' sx={{m:'10px 0px 5px 65px'}}>Data</Typography>
          <MenuItem icon={<PeopleOutlined />}>Manage Team</MenuItem>
          <MenuItem icon={<ContactsOutlined />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlined />}>Invoices Balance</MenuItem>
          <Typography variant='h6' sx={{m:'10px 0px 5px 65px'}}>Pages</Typography>
          <MenuItem icon={<PersonOutlinedIcon />}>Profile Form</MenuItem>
          <MenuItem icon={<CalendarTodayOutlined />}>Calendar</MenuItem>
          <MenuItem icon={<LiveHelpRoundedIcon />}>FAQ</MenuItem>
          <Typography variant='h6' sx={{m:'10px 0px 5px 65px'}}>Charts</Typography>
          <MenuItem icon={<BarChartOutlinedIcon />}>Bar Chart</MenuItem>
          <MenuItem icon={<PieChartOutlineOutlinedIcon />}>Pie Chart</MenuItem>
          <MenuItem icon={<StackedLineChartOutlinedIcon />}>
            Line Chart
          </MenuItem>
          <MenuItem icon={<MapOutlinedIcon />}>GeoGraphy Chart</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default SideBarPro;
