// import React,{useEffect, useState} from 'react';
// import { Pagination } from '@mui/material/Pagination';
// import { Box, Stack, Typography } from '@mui/material';

// import { exerciseOptions, fetchData } from '../utils/fetchData';

// import ExerciseCard from './ExerciseCard';


// const Exercises = ({exercises, setExercises, bodyPart}) => {
// console.log(exercises);


//   return (
//     <Box id="exercises" 
//       sx={{mt:{lg:'110px'}}}
//       mt="50px"
//       p="20px"
//     > 
//     <Typography varient="h3" mb="46px">
      
//       showing results
//     </Typography>
//     <Stack direction="row" sx={{gap:{lg: '110px'}}}
//       flexWrap="wrap" justifyContent="center" >
//         {exercises.map((exercise, index)=>(
//           <ExerciseCard key={index} exercise={exercise}/>
//         ))}
    
//     </Stack>


//     </Box>
//   )
// }

// export default Exercises


import React,{useEffect, useState} from 'react';
import { Pagination } from '@mui/material';

import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  
const [currentPage, setCurrentPage] = useState(1);
const exercisesPerPage=9;

const indexofLastExercise=currentPage*exercisesPerPage;

const indexOfFirstExercise=indexofLastExercise-exercisesPerPage;

const currentExercises= exercises.slice(indexOfFirstExercise,indexofLastExercise)


const paginate=(e, value)=>{

  setCurrentPage(value);
  window.scrollTo({top:1800,behavior:'smooth'})
}

useEffect(()=>{
  const fetchExerciseData= async () =>{
    let exercisesData=[];

    if(bodyPart=== 'all'){
      exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises'
      ,exerciseOptions);
    }else{
      exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
      ,exerciseOptions);
    }
    setExercises(exercisesData);
  }

  fetchExerciseData();
},[bodyPart]);


  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
          mt="50px"
          p="20px"
        >
          <Typography
            variant="h3"
            mb="46px"
            sx={{
              color: '#3A1212', // Change the text color to a catchy color
              fontSize: { xs: '24px', md: '32px' }, // Adjust the font size for different screen sizes
              fontWeight: 'bold', // Add font weight to make it more prominent
              textAlign: 'center', // Center the text
              textTransform: 'uppercase', // Transform the text to uppercase
              letterSpacing: '1px', // Add letter spacing for a stylish look
            }}
          >
            Get Ready to Crush It!
          </Typography>
          <Stack direction="row" sx={{gap:{lg: '110px'}}}
            flexWrap="wrap" justifyContent="center" >
              {currentExercises.map((exercise,index)=>(
                  <ExerciseCard key={index} exercise={exercise}/>

              ))}

          </Stack>
          <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
            {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
      
    </Box>
  )
}

export default Exercises