import { Box } from '@mui/material'
import React, { useState } from 'react'
import Post from './Post'


const postsArr = [
  { 
    id: 1,
    userName: "MisterMiller030",
    userLogo: "https://mui.com/static/images/avatar/1.jpg",
    date: "September 12, 2022",
    userSpruch: "LinkedIn ist wie Tinder, nur umgekehrt. Junge Frauen schreiben ITler an, aber die ignorieren sie.",
    rating: 1,
    isRated: false
  },
  { 
    id: 2,
    userName: "Bingo",
    userLogo: "https://mui.com/static/images/avatar/2.jpg",
    date: "September 13, 2022",
    userSpruch: "Fragen Sie nicht, was Ihr Computer für Sie tun kann. Fragen Sie, was Sie für Ihren Computer tun können.",
    rating: 10,
    isRated: false
  },
  { 
    id: 3,
    userName: "Bango",
    userLogo: "https://mui.com/static/images/avatar/3.jpg",
    date: "September 14, 2022",
    userSpruch: "Schizophrenie ist auch nur eine Form von Multitasking …",
    rating: 3,
    isRated: false
  },
  
]



function Feed() {
  
  const [posts, setPosts] = useState(postsArr);
  
  return (
    
    <Box flex={4} p={2}>
      {
      posts.map(e => 
        <Post 
        key={e.id}
        userName={e.userName}
        userLogo={e.userLogo}
        date={e.date}
        userSpruch={e.userSpruch}
        rating={e.rating}
        isRated={e.isRated}
        />
      )
    }
    </Box>
  )
}

export default Feed