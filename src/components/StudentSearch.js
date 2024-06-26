import React from 'react';
import { TextField } from '@material-ui/core';

const StudentSearch = ({ onSearch }) => {
  return (
    <TextField label="Search" onChange={(e) => onSearch(e.target.value)} fullWidth margin="normal" />
  );
};

export default StudentSearch;
