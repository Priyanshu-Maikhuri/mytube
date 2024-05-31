import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from 'react-player'
import { Box, Typography, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { fetchDataFromAPI } from "../utils/fetchDataFromAPI"
import { Videos } from '../components'

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchDataFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]))
    fetchDataFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if (!videoDetails?.snippet)
    return (<Typography
      sx={{ color: '#fC1503', fontSize: '17px', fontWeight: 'bold' }}
      alignItems='center'
      justifyContent='center'>
      Loading...
    </Typography>)

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: 'sticky', top: '83px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls />
            <Typography color='#fff' variant="h5" p={2} fontWeight='bold'>
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap='20px' alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ xs: 5, md: 1 }} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail