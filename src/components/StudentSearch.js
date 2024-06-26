import React from 'react';
import { TextField } from '@material-ui/core';

const StudentSearch = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <TextField
      label="Search"
      onChange={handleChange} 
      fullWidth
      margin="normal"
    />
  );
};

export default StudentSearch;
