import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import Header from '../../components/Header';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { specialCharMap } from '@testing-library/user-event/dist/keyboard';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header title="Team" subTitle="Hello My team Members" />
      <Box
        height="75vh"
        m="20px 0 0 0 "
        sx={{
          ' & .MuiDataGrid-root': { border: 'none' },
          ' & .MuiDataGrid-cell': { borderBottom: 'none' },
          ' & .name-column--cell': { color: colors.greenAccent[300] },
          ' & .MuiDataGrid-columnHeaders': {
            color: colors.blueAccent[700],
            borderBottom: 'none',
          },
          ' & .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[800],
          },
          ' & .MuiDataGrid-footerContainer': {
            borderTop:'none',
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};
export default Team;
