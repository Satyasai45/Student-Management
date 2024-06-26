import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@material-ui/core';
import { addStudent, updateStudent } from '../api';

const StudentForm = ({ open, setOpen, student, fetchStudents }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (student) {
      await updateStudent(formData);
    } else {
      await addStudent(formData);
    }
    fetchStudents(1);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{student ? 'Edit Student' : 'Add Student'}</DialogTitle>
      <DialogContent>
        <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="dense" disabled={!!student} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">{student ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentForm;
