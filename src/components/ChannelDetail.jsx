import React from 'react'
import { useEffect,useState } from 'react'

import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFormAPI } from './utils/FetchFormAPI'
const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVidios]=useState([])
  const {id}=useParams()

  useEffect(()=>{
    fetchFormAPI(`channels?part=snippet&id=${id}`)
    .then(data=>setChannelDetail(data?.items[0]))


    fetchFormAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then(data=>setVidios(data?.items))
  },[id])
  return (
  <Box minHeight='95vh'>
    <Box>
      <div 
      style={{
         background:'radial-gradient(circle, rgba(63,244,251,1) 0%, rgba(252,70,107,1) 100%)',
         zIndex:10,
         height:'300px'
         }}/>
    <ChannelCard channelDetail={channelDetail} marginTop='-120px'/>
    </Box>
    
    <Box display='flex' p={2}>
      <Box sx={{mr:{ms:'100px'} ,backgroundColor:'#000'}}></Box>
      <Videos videos={videos}></Videos>
    </Box>
  </Box>
  )
  
}

export default ChannelDetail
