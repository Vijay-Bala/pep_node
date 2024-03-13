import React from 'react'
import { Toolbar, AppBar, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate()
  return (
    <AppBar position='static'>
        <Toolbar>
            <Button color='inherit' onClick={() => navigate('/portal/home')}>Home</Button>
            <Button color='inherit' onClick={() => navigate('/portal/addmovie')}>Add</Button>
            
        </Toolbar>
    </AppBar>
  )
}

export default Topbar