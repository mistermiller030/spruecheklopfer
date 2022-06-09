
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVert from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

function Post({userName, userLogo, userSpruch, rating, date}) {
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar
             
          sx={{ width: 50, height: 50 }}
          src={userLogo}
          
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={userName}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://www.feldhof.com/de/blog/wp-content/uploads/2019/07/AdobeStock_68984534-752x440.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h3" color="text.secondary">
        {userSpruch}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        Anzahl likes:{rating} <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
    
      </CardActions>
      
    </Card>
  )
}

export default Post