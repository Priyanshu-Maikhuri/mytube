import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
     const navigate = useNavigate();
     const [searchTerm, setSearchTerm] = useState('')

     const handleSubmit = (e) => {
          e.preventDefault();
          if (searchTerm.trim().length) {
               navigate(`/search/${searchTerm}`)

               setSearchTerm('')
          }
     }
     return (
          <Paper
               component="form"
               onSubmit={handleSubmit}
               sx={{
                    pl: 1,
                    borderRadius: 20,
                    border: '1px solid #e3e3e3',
                    boxShadow: 'none',
                    mr: { sm: 5 }
               }}
          >
               <input
                    className='search-bar'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
               />
               <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                    <Search />
               </IconButton>
          </Paper>
     )
}

export default SearchBar