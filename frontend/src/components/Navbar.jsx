import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem,  } from '@mui/material'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

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
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex",

    }
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none",

    }
}));



function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Sprücheklopfer</Typography>
            <RecordVoiceOverIcon sx={{display:{xs:"block", sm:"none"}}}></RecordVoiceOverIcon>
            
            <Search><InputBase placeholder='suche einen Spruch...'/></Search>

            <Icons>

            <Badge badgeContent={4} color="error">
            <MailIcon />
            </Badge>

            <Badge badgeContent={4} color="error">
            <NotificationsIcon />
            </Badge>
            <Avatar
             
             sx={{ width: 30, height: 30 }}
             src="https://mui.com/static/images/avatar/1.jpg"
             onClick={(e) => setOpen(true)}
             />

            
            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
            
            <Avatar
             
             sx={{ width: 30, height: 30 }}
             src="https://mui.com/static/images/avatar/1.jpg"
             
             />
            <Typography variant='span'>Username</Typography>
            </UserBox>
        
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem> My account</MenuItem>
        <MenuItem> Logout</MenuItem>
      </Menu>


    </AppBar>
  )
}

export default Navbar