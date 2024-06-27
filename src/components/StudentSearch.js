import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

function App() {
    const [query, setQuery] = useState('');

    const onSearch = (query) => {
        console.log('Searching for:', query);
    };

    const handleChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <div>
  <TextField
      label="Search"
      onChange={handleChange} 
      value={query}
      fullWidth
      margin="normal"
    />
        </div>
    );
}

export default App;
