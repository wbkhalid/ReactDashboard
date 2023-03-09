import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../../components/Header';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },

    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => <Typography>$ {params.row.cost}</Typography>,
    },

    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 0.5,
    },
  ];
  return (
    <Box m="20px">
      <Header title="Invoicess" subTitle="List of Invoices balance" />
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
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          ' & .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        ></DataGrid>
      </Box>
    </Box>
  );
};
export default Invoices;
