import React from 'react'


import {Box, Stack, Typography} from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return 'loading..';
  
    return (
      <Box
        sx={{
          marginTop: { lg: '140px', xs: '20px' },
          p: '10px', // Reduce the vertical padding
          backgroundColor: '#bcaaa4', // Adding a background color to the box
          borderRadius: '20px', // Adding rounded corners to the box
          maxWidth: '1200px', // Set the maximum width of the box to 600px
          maxHeight:'700px',
        }}
      >
        <Typography variant="h4" mb="33px">
          Videos of{''}
          <Typography
            component="span"
            color="#FF2625"
            variant="h4"
            mb="33px"
            fontWeight="bold"
            display="inline"
            p="20px"
          >
            {name}
          </Typography>
        </Typography>
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          sx={{
            flexDirection: { lg: 'row' },
            gap: { lg: '110px', xs: '20px' }, // Adding some gap between videos
          }}
        >
          {exerciseVideos?.slice(0, 3).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none', // Remove default underline on links
                color: '#000', // Set text color to black
                maxWidth: '300px', // Limit the width of each video container
              }}
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ width: '100%' }} />
              {/* Display video title under the video */}
              <Typography variant="subtitle1" mt="10px">
                {item.video.title}
              </Typography>
            </a>
          ))}
        </Stack>
      </Box>
    );
  };
  
  

export default ExerciseVideos