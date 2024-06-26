import React, { useContext } from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import ThemeSwitch from './components/ThemeSwitch';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <h1>Student Management</h1>
      <div className={`App ${theme}`}>
        <ThemeSwitch />
        <StudentTable />
      </div>
    </ThemeProvider>
  );
};

export default App;
