import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => (
     <Box sx={{
          boxShadow: "none",
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '100%', sm: '378px', md: '340px' },
          height: '290px',
          margin: 'auto',
          marginTop
     }}>
          <Link to={`/channel/${channelDetail?.id?.channelId}`}>
               <CardContent sx={{
                    textAlign: 'center',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
               }}>
                    <CardMedia
                         image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                         alt={channelDetail?.snippet?.title}
                         sx={{
                              borderRadius: "50%",
                              height: '180px',
                              width: '180px',
                              mb: 2,
                              border: '1px solid #e3e3e3'
                         }} />
                    <Typography>
                         {channelDetail?.snippet?.title}
                         <CheckCircle sx={{ ml: '5px', color: 'gray', fontSize: 15 }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                         <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                         </Typography>
                    )}
               </CardContent>
          </Link>
     </Box>
);

export default ChannelCard