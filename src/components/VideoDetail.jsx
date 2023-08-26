import React from 'react'
import { Stack,Box } from '@mui/system'
import Videos from './Videos'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFormAPI } from './utils/FetchFormAPI'

import { useEffect,useState } from 'react'
import { Typography } from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id}=useParams()

  useEffect(() => {
    fetchFormAPI(`videos?part=snippet,statistics&id=${id}`).then(data=>setVideoDetails(data.items[0]))
    fetchFormAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(data=>setVideos(data.items))
  }, [id])
  
  console.log(videoDetails)

  if(!videoDetails?.snippet)return 'loading ....'
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetails
  return (
  <Box minHeight='95vh'>
    <Stack direction={{xs:'column',md:'row'}}>
      <Box flex={1}>
        <Box sx={{width:'100%',position:'sticky',top:'86px',zIndex:5}}>
          <ReactPlayer url={`Https://www.youtube.com/watch?v=${id}`} controls className='react-player' />
        </Box>
        <Typography p={2} color='#fff' fontWeight='bold'>
          {title}
        </Typography>
        <Stack direction='row' justifyContent='space-between'py={1} px={2} sx={{color:'gray'}}>
          <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
          </Link>
          <Stack direction='row' gap='20px' alignItems='center'>
            <Typography variant='body1' color='#fff' sx={{opacity:0.7}}>
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography variant='body1' color='#fff' sx={{opacity:0.7}}>
              {parseInt(likeCount).toLocaleString()} likes
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box px={2} py={{xs:5 ,md:1}} justifyContent='center'alignItems='center' >
        <Videos videos={videos} direction='column'></Videos>

      </Box>
    </Stack>
  </Box>
  )
}

export default VideoDetail
