import React, { useState } from 'react';
import { Box, TextField, Button, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function FormView() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  interface DataRow {
  id: string;
  name: string;
}

const data: DataRow[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Bob Johnson' },
];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError('Please enter a value');
      return;
    }
    setError('');
    console.log('Form submitted with value:', inputValue);
    setInputValue('');
  };

  const handleTableButtonClick = (name) => {
    console.log(`Button clicked for: ${name}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 600,
        margin: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Simple Form
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Horizontal layout
            alignItems: 'flex-start', // Align items at the top
            gap: 2, // Space between TextField and Button
            flexWrap: 'wrap', // Wrap for responsiveness on small screens
          }}
        >
          <TextField
            label="Enter Text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{ flexGrow: 1 }} // TextField takes available space
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ minWidth: 100 }} // Ensure button doesn't shrink too much
          >
            Submit
          </Button>
        </Box>
      </form>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '48px', padding: 0 }} align="center" />
            <TableCell>User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ width: '48px', padding: 0 }} align="center">
                <IconButton onClick={() => handleTableButtonClick(row.id)} size="small">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
    </Box>
  );
}

export default FormView;