import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Link to='/' style={{color:'inherit', textDecoration:'none'}} ><Typography variant='h4' sx={{marginRight:'20px'}}  color='text.primary'>KIRKIT</Typography></Link>
                <Link to='/news' style={{color:'inherit', textDecoration:'none'}}><Typography variant='h6' sx={{marginRight:'12px'}} fontWeight={300} color='text.secondary'>Scores</Typography></Link>
                <Link to='/' style={{color:'inherit', textDecoration:'none'}}><Typography variant='h6' sx={{marginRight:'12px'}} fontWeight={300} color='text.secondary'>Schedule</Typography></Link>
                <Link to='/' style={{color:'inherit', textDecoration:'none'}}><Typography variant='h6' sx={{marginRight:'12px'}} fontWeight={300} color='text.secondary'>Teams</Typography></Link>
                <Link to='/' style={{color:'inherit', textDecoration:'none'}}><Typography variant='h6' sx={{marginRight:'12px'}} fontWeight={300} color='text.secondary'>Ranking</Typography></Link>
                <Link to='/' style={{color:'inherit', textDecoration:'none'}}><Typography variant='h6' sx={{marginRight:'12px'}} fontWeight={300} color='text.secondary'>About</Typography></Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar