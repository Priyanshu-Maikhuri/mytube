import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from '../components'
import { fetchDataFromAPI } from '../utils/fetchDataFromAPI'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  // console.log(channelDetail, videos);

  useEffect(async () => {
    fetchDataFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    fetchDataFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])

  if(!channelDetail || !videos)
    return 'Loading...'

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          backgroundImage: 'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)',
          height: '280px',
          zIndex: 10
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-80px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail