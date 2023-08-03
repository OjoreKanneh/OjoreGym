import React from 'react';
import { useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';



import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart, setBodyPart}) => {

  const [search,setSearch]=useState('');
  
  const [bodyParts, setBodyParts]=useState([]);

  useEffect(()=>{
    const fetchExerciseData=async() =>{
      const bodyPartsData =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
      ,exerciseOptions);

      // setBodyParts(['all', ...bodyPartsData ]);
      setBodyParts([...bodyPartsData]);
    }

    fetchExerciseData();

  },[])

  const handleSearch=async()=> {
    if(search) {
      const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises'
      ,exerciseOptions);

      const searchedExercises= exerciseData.filter(
        (exercise)=>exercise.name.toLowerCase().includes(search)
        ||exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)
      );

      

      setSearch('');
      setExercises(searchedExercises);
    }
  }


  return (
   <Stack alignItems="center" mt="37px"
   justifyContent="center" p="20px">
      <Typography
  fontWeight={700}
  sx={{
    fontSize: { lg: '48px', xs: '36px' },
    textAlign: 'center',
    color: '#3A1212',
    lineHeight: 1.2,
    mt: { lg: '40px', xs: '20px' },
  }}
>
  Unleash Your Strength<br />
  With Top Tier Exercises!
</Typography>
      {/* <Box position="relative" mb="72px">
        <TextField
          sx={{
            input:{
              fontWeight: '700',
              border: 'none',
              borderRadius:'4px'
            },
            width:{ lg: '800px', xs:'350px'},
            backgroundColor:'#fff', 
            borderRadius:'40px'
          }}
          height="76px"
          value={search}
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercise'
          type="text"
        />
        <Button className="search-btn" 
          sx={{
            bgcolor:'#FF2625',
            color:'#fff',
            textTransform: 'none',
            width:{lg: '175px', xs:'80px'},
            fontSize:{lg: '20px', xs: '14px'},
            height: '56px',
            position:'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        
        >
          Search
        </Button>
      </Box> */}
      <Box position="relative" mb="72px">
      <TextField
        sx={{
          '& .MuiInputBase-input': {
            fontWeight: '700',
            border: '2px solid #ccc', // Adding a border to the input field
            borderRadius: '4px',
            paddingLeft: '16px', // Adding some padding to the left for better spacing
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            transition: 'border-color 0.3s ease', // Adding a smooth transition on border color change
            '&:focus': {
              borderColor: '#FF2625', // Changing border color on focus
            },
          },
        }}
        height="56px" // Adjusting the height for consistency
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercise"
        type="text"
      />
      <Button
        className="search-btn"
        sx={{
          bgcolor: '#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '59px', // Matching the height with the TextField
          position: 'absolute',
          right: '0',
          borderRadius: '0 4px 4px 0', // Adjusting the button border-radius for better alignment
          '&:hover': {
            bgcolor: '#d7ccc8', // Darken the background color on hover
          },
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>

      <Box sx={{position: 'relative', width:'100%',p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} 
          bodyPart={bodyPart} setBodyPart={setBodyPart} />

      </Box >


   </Stack>
  )
}

export default
SearchExercises