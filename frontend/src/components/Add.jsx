import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from '@material-ui/core/node_modules/@material-ui/styles';
import { width } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
})
const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px"
  
})

 
const Add = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    <Tooltip onClick={e => setOpen(true)} title="Klopfe deinen Spruch" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
        <Fab color="primary" aria-label="add">
    <AddCircleIcon />
    </Fab>
 </Tooltip>

 <StyledModal
  open={open}
  onClose={e => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
        <Typography variant='h6' color="gray" textAlign="center">
          Klopfe deinen Spruch
        </Typography>
  <UserBox>
  <Avatar 
     sx={{ width: 30, height: 30 }}
     src="https://mui.com/static/images/avatar/1.jpg"
  />
  <Typography fontWeight={500} variant="span">MisterMiller030</Typography>
  </UserBox>
  <TextField
          sx={{marginTop:"20px", width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Hier kommt dein Spruch rein!"
          variant="standard"
        />
  <Stack direction="row" gap={1} mt={2} mb={3}>
  <EmojiEmotionsIcon color='primary' />
  <AddPhotoAlternateIcon color='secondary' />
  <VideoFileIcon color='success' />
  <PersonAddIcon color='error' />
  </Stack>
  <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Klopfen</Button>
  <Button><CalendarMonthIcon/></Button>
 
</ButtonGroup>
  </Box>
</StyledModal>

    </>
  );
};

export default Add;

