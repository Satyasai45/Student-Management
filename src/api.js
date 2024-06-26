import axios from 'axios';

const API_URL = "https://studentmgmtapi.vercel.app/api/allStudents"; 

export const getStudents = async (page, limit) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

export const addStudent = async (student) => {
  try {
    const response = await axios.post(API_URL, student);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};

export const updateStudent = async (student) => {
  try {
    const response = await axios.put(`${API_URL}/${student.id}`, student);
    return response.data;
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
};

