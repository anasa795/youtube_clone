import React from 'react'
import { Stack, Box } from '@mui/system'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({ videos,direction }) => {
  // console.log(videos)
  if(!videos?.length)return 'loading'
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2} 
    sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'  }}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
