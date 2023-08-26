import React, { useEffect, useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFormAPI } from './utils/FetchFormAPI'
const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFormAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items),
    )
  }, [selectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: { sx: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: '3' },
          color: '#fff',
          width: { sx: 'auto', md: '15%' },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: '#fff', mt: '1.5' }}
        >
          copyright Anas 2022
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: '#fff' }}
        >
          {selectedCategory}{' '}
          <span
            style={{
              color: '#FC1503',
            }}
          >
            videos
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
