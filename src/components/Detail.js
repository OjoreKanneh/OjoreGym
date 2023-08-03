import React from 'react'

import { Typography, Stack, Button, Box} from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';



const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl,name, target, equipment}= exerciseDetail;


  return (
    // <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
    //     <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>

    //     <Stack sx={{gap: {lg:'35px', sx:'20px'}}}>
    //         <Typography>
    //             {name}
    //         </Typography>
    //         <Typography>
    //             {name} keeps you strong. 
    //             this exercise targets your {target}

    //         </Typography>

    //     </Stack>
        


    // </Stack>
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        style={{
          maxWidth: '100%',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          backgroundColor: '#bcaaa4',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 'bold', color: '#f44336' }}>
          {name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '14px', md: '16px' }, color: '#666' }}
        >
          {name} keeps you strong. This exercise targets your <span style={{ color: '#f44336' }}>{target}</span>.
          <br />
          It also makes strong use of your <span style={{ color: '#f44336' }}>{bodyPart}</span>.
          <br />
          You make use of {' '}
            {equipment === 'body weight' ? (
                <span style={{ color: '#f44336' }}>your {equipment}</span>
            ) : (
                <span style={{ color: '#f44336' }}>a {equipment}</span>
            )}{' '}
            to do this exercise.
        </Typography>
      </Box>
    </Stack>
  )
}

export default Detail