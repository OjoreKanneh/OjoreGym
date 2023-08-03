import React from 'react';
import { Stack,Typography } from '@mui/material';


// import Icon from '../assets/icons/gym.png';
import chestImage from '../assets/images/chest.png';
import backImage from '../assets/images/back.png';
import cardioImage from '../assets/images/cardio.png';
import lowerArmsImage from '../assets/images/lowerArms.png';
import lowerLegsImage from '../assets/images/lowerLegs.png';
import neckImage from '../assets/images/neck.png';
import shoulderImage from '../assets/images/shoulder.png';
import upperArmImage from '../assets/images/upperArms.png';
import upperlegImage from '../assets/images/upperLegs.png';
import waistImage from '../assets/images/waist.png'; 

const BodyParts = ({item,setBodyPart,bodyPart}) => {
    // Define the body part to image mapping
  const bodyPartImages = {
    lowerArms: lowerArmsImage,
    lowerLegs: lowerLegsImage,
    chest: chestImage,
    back: backImage,
    cardio:cardioImage,
    neck:neckImage,
    shoulder:shoulderImage,
    upperArm: upperArmImage,
    upperLeg:upperlegImage,
    waist:waistImage
  };
  return (
    <Stack
  type="button"
  alignItems="center"
  justifyContent="center"
  className="bodyPart-card"
  sx={{
    border: `4px solid ${bodyPart === item ? '#ff2625' : 'transparent'}`,
    backgroundColor: '#bcaaa4',
    borderRadius: '20px',
    width: '270px',
    height: '280px',
    cursor: 'pointer',
    gap: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
    transition: 'border-color 0.3s ease', // Adding a smooth transition on border color change
    '&:hover': {
      border: '4px solid #ff2625', // Changing border color on hover
    },
  }}
  onClick={() => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  }}
>
  <img
    src={bodyPartImages[item]}
    alt={item}
    style={{ width: '135px', height: '135px', borderRadius: '50%' }}
  />
  <Typography
    fontSize="24px"
    fontWeight="bold"
    color="#3A1212"
    textTransform="capitalize"
    textAlign="center"
  >
    {item}
  </Typography>
</Stack>
  )
}

export default BodyParts