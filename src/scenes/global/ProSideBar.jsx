import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { tokens } from '../../theme';
import { useNavigate } from 'react-router-dom';
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
import Team from '../team';
const SideBarPro = () => {
  const Navigate = useNavigate();
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
          <MenuItem icon={<HomeOutlined />} onClick={() => Navigate('/')}>
            Dashboard
          </MenuItem>
          <Typography
            variant="subtitle1"
            sx={{ m: '10px 0px 5px 65px', fontWeight: 'bold' }}
          >
            Data
          </Typography>

          <MenuItem icon={<PeopleOutlined />} onClick={() => Navigate('/team')}>
            Manage Team
          </MenuItem>
          <MenuItem
            icon={<ContactsOutlined />}
            onClick={() => Navigate('/contact')}
          >
            Contacts
          </MenuItem>
          <MenuItem
            icon={<ReceiptOutlined />}
            onClick={() => Navigate('/invoices')}
          >
            Invoices Balance
          </MenuItem>
          <Typography
            variant="subtitle1"
            sx={{ m: '10px 0px 5px 65px', fontWeight: 'bold' }}
          >
            Pages
          </Typography>
          <MenuItem
            icon={<PersonOutlinedIcon />}
            onClick={() => Navigate('/form')}
          >
            Profile Form
          </MenuItem>
          <MenuItem
            icon={<CalendarTodayOutlined />}
            onClick={() => Navigate('/calendar')}
          >
            Calendar
          </MenuItem>
          <MenuItem icon={<LiveHelpRoundedIcon />} onClick={() => Navigate('/faq')}>FAQ</MenuItem>
          <Typography
            variant="subtitle1"
            sx={{ m: '10px 0px 5px 65px', fontWeight: 'bold' }}
          >
            Charts
          </Typography>
          <MenuItem icon={<BarChartOutlinedIcon />}  onClick={() => Navigate('/bar')}>Bar Chart</MenuItem>
          <MenuItem icon={<PieChartOutlineOutlinedIcon />} onClick={() => Navigate('/pie')}>Pie Chart</MenuItem>
          <MenuItem icon={<StackedLineChartOutlinedIcon />} onClick={() => Navigate('/line')}>
            Line Chart
          </MenuItem>
          <MenuItem icon={<MapOutlinedIcon />} onClick={() => Navigate('/geography')}>GeoGraphy Chart</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default SideBarPro;
