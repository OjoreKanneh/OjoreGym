import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start" // Move the logo to the left and "Home" and "Exercises" to the center
      alignItems="center" // Center the content vertically
      sx={{
        backgroundColor: '#bcaaa4', // Adding a background color to the navbar
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        py: '10px', // Adding some vertical padding to create spacing between content and navbar
        px: '20px',
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="center" // Center the links vertically
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};



export default Navbar