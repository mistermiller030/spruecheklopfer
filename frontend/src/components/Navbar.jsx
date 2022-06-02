import React from 'react'
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",

})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
    backgroundColor: "white",
}));



function Navbar() {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Sprücheklopfer</Typography>
            <RecordVoiceOverIcon sx={{display:{xs:"block", sm:"none"}}}></RecordVoiceOverIcon>
            
            <Search>suche den Spruch...</Search>

            <Icons>Hier kommen die Icons rein</Icons>
        
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar