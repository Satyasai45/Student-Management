import React, { useState, useEffect } from 'react';
import { getStudents, deleteStudent } from '../api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import StudentForm from './StudentForm';
import StudentSearch from './StudentSearch';
import Pagination from '@material-ui/lab/Pagination';

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [openForm, setOpenForm] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    fetchStudents(page);
  }, [page]);

  const fetchStudents = async (page) => {
    const data = await getStudents(page, 8);
    setStudents(data.students);
    setTotalPages(data.totalPages);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents(page);
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setOpenForm(true);
  };

  const handleAdd = () => {
    setEditStudent(null);
    setOpenForm(true);
  };

  return (
    <div>
      <StudentSearch />
      <Button variant="contained" color="primary" onClick={handleAdd}>Add Student</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(student)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(student.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={totalPages} page={page} onChange={(e, value) => setPage(value)} />
      {openForm && <StudentForm open={openForm} setOpen={setOpenForm} student={editStudent} fetchStudents={fetchStudents} />}
    </div>
  );
};

export default StudentTable;
