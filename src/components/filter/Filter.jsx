import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Filter = ({searchQuery, setSearchQuery}) => {

    return (
        <div>
            <TextField onChange={(event) => setSearchQuery(event.target.value.toLowerCase())} id="standard-basic" label="Search" variant="standard" value={searchQuery} 
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }} />
        </div>
    )
}

export default Filter;