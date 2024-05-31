import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
      <Stack
        direction="row"
        p={2}
        alignItems="center"
        sx={{  position: "sticky", justifyContent: "space-between", top: 0, background: "#000" }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height="45" />
          <Typography variant='h1' color='#fff' fontWeight='700' fontSize='30px' display={{xs: 'none', md: 'inline'}}> MyTube</Typography>
        </Link>
        <SearchBar />
      </Stack>
  )
}

export default Navbar