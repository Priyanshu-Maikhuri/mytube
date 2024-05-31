import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoThumbnailUrl } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
     // console.log(videoId, snippet);
     return (
          <Card sx={{
               width: { xs: '100%', sm: '378px', md: '340px' },
               boxShadow: 'none',
               borderRadius: 0
          }}>
               <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <CardMedia
                         image={snippet?.thumbnails?.high?.url}
                         alt={snippet?.title}
                         sx={{
                              height: 180,
                              width: { xs: '100%', sm: '378px', md: '340px' },
                         }} />
                    <CardContent sx={{ height: '70px', backgroundColor: '#1e1e1e' }}>
                         <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
                              <Typography fontWeight='bold' color='#fff' variant='subtitle1'>
                                   {snippet?.title.slice(0, 60) ||
                                        demoVideoTitle.slice(0, 60)}
                              </Typography>
                         </Link>
                         <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                              <Typography fontWeight='bold' color='gray' variant='subtitle2'>
                                   {snippet?.channelTitle ||
                                        demoChannelTitle}
                                   <CheckCircle sx={{ ml: '5px', color: 'gray', fontSize: 12 }} />
                              </Typography>
                         </Link>
                    </CardContent>
               </Link>
          </Card>
     )
}

export default VideoCard