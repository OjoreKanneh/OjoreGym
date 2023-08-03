import React from 'react';
import {Box, Grid} from '@mui/material' ;
import {Stack} from '@mui/material' ;
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import gymImage from '../assets/images/gym.png';

// const HeroBanner = () => {
//   return (
//     <Grid container alignItems="center">
//       {/* Left Column */}
//       <Grid item xs={12} md={6}>
//         <Box
//           sx={{
//             mt: { lg: '-70px', xs: '70px' },
//             ml: { sm: '50px' },
//             position: 'relative',
//             p: '20px',
//             backgroundColor: '#bcaaa4', // Adding a subtle background color
//             borderRadius: '12px', // Rounded corners for the box
//           }}
//         >
//           <Typography color="#FF2625" fontWeight="600" fontSize="32px">
//             Welcome to the Fitness Club
//           </Typography>

//           <Typography fontWeight={700} sx={{ fontSize: { lg: '48px', xs: '44px' } }} mb="20px" mt="30px">
//             Sweat, Smile <br /> and Repeat
//           </Typography>

//           <Typography fontWeight="400" lineHeight="1.6" mb={4}>
//             Check out our wide range of effective exercises to achieve your fitness goals.
//           </Typography>

//           <Button variant="contained" color="error" href="#exercises">
//             Explore Exercises
//           </Button>
//         </Box>
//       </Grid>

//       {/* Right Column */}
//       <Grid item xs={12} md={6} sx={{ mt: { lg: '-110px', xs: '70px' } }}>
//         <img src={HeroBannerImage} alt="banner" className='hero-banner' />
//       </Grid>
//     </Grid>
//   );
// };

// export default HeroBanner;
const HeroBanner = () => {
  return (
    <Grid container alignItems="center" sx={{ gap: 0 }}>
      {/* Left Column */}
      <Grid item xs={12} md={6} sx={{ mt: { lg: '50px', xs: '120px' } }}>
        <img src={gymImage} alt="banner" style={{ width: '106.55%', height: '510px', borderRadius: '12px' }} />
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={6}>
        <Box style={{ width: '70%', height: '612px'}}
          sx={{
            ml: { sm: '50px' },
            position: 'relative',
            p: '20px',
            backgroundColor: '#bcaaa4', // Adding a subtle background color
            borderRadius: '12px', // Rounded corners for the box
            mt: { lg: '0', xs: '70px' }, // Remove top margin for the right column
          }}
        >
          <Typography color="#FF2625" fontWeight="600" fontSize="32px">
            Transform Your Life
          </Typography>

          <Typography fontWeight={700} sx={{ fontSize: { lg: '48px', xs: '44px' } }} mb="20px" mt="30px">
            Get Fit, Be Confident <br /> and Repeat
          </Typography>

          <Typography
                fontWeight="400"
                lineHeight="1.6"
                mb={4}
                sx={{
                  fontSize: { xs: '16px', md: '18px' },
                  color: '#444',
                  maxWidth: '400px',
                  textAlign: 'center',
                  mt: '20px',
                }}
              >
                Unleash Your Potential with Our Diverse Range of Powerful Exercises.
                Whether you're a beginner or a fitness enthusiast, we've got something
                for everyone. Let's embark on this journey together and reach new heights
                of strength and endurance!
              </Typography>

              <Button
              variant="contained"
              color="error"
              href="#exercises"
              sx={{
                mt: '20px',
                fontSize: '18px',
                borderRadius: '10px',
                padding: '10px 25px',
                textTransform: 'capitalize',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#FF2625',
                },
              }}
            >
              Start Exploring
            </Button>
        </Box>
      </Grid>
    </Grid>
  );
};


  
  
export default HeroBanner

