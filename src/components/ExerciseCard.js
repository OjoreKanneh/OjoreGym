import React from 'react';
import {Link} from 'react-router-dom';
import { Button,Stack, Typography, Box} from '@mui/material';
// import { Link, Typography, Button,  } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      sx={{
        color: '#3e2723',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #bcaaa4',
        borderRadius: '12px',
        padding: '24px', // Increase the padding to make the card higher
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        style={{
          width: '100%',
          borderRadius: '10px',
          marginBottom: '16px', // Increase the spacing between the image and buttons
        }}
      />

      <Button
        sx={{
          color: '#fff',
          background: '#ffa9a9',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          color: '#fff',
          background: '#fcc757',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
          mt: '10px',
        }}
      >
        {exercise.target}
      </Button>

      <Box
        sx={{
          mt: '16px', // Increase the spacing between the buttons and name
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#f44336',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {exercise.name}
        </Typography>
      </Box>
    </Link>
  );
};

// const ExerciseCard = ({ exercise }) => {
//   return (
//     <Link
//       className="exercise-card"
//       to={`/exercise/${exercise.id}`}
//       sx={{
//         color: '#3e2723',
//         textDecoration: 'none',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         backgroundColor: '#f9f9f9', // Replace with the desired background color
//         borderRadius: '12px',
//         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
//         padding: '20px',
//         transition: 'transform 0.3s ease', // Adding a smooth transition on hover
//         '&:hover': {
//           transform: 'scale(1.02)', // Enlarge the card on hover
//         },
//       }}
//     >
//       <img
//         src={exercise.gifUrl}
//         alt={exercise.name}
//         loading="lazy"
//         style={{
//           width: '100%',
//           borderRadius: '10px',
//           marginBottom: '10px', // Add some spacing between the image and buttons
//         }}
//       />

//       <Button
//         sx={{
//           color: '#fff',
//           background: '#ffa9a9',
//           fontSize: '14px',
//           borderRadius: '20px',
//           textTransform: 'capitalize',
//         }}
//       >
//         {exercise.bodyPart}
//       </Button>
//       <Button
//         sx={{
//           color: '#fff',
//           background: '#fcc757',
//           fontSize: '14px',
//           borderRadius: '20px',
//           textTransform: 'capitalize',
//           mt: '10px', // Add some spacing between the buttons and name
//         }}
//       >
//         {exercise.target}
//       </Button>

//       <Box
//         sx={{
//           mt: '10px', // Add some spacing between the buttons and name
//           textAlign: 'center',
//         }}
//       >
//         <Typography
//           variant="h5" // Adjust the variant to control the size and weight of the text
//           sx={{
//             color: '#8d6e63', // Replace with the desired text color
//             fontSize: '20px', // Adjust the font size as needed
//             fontWeight: 'bold', // Adjust the font weight as needed
//           }}
//         >
//           {exercise.name}
//         </Typography>
//       </Box>
//     </Link>
//   );
// };

// const ExerciseCard = ({exercise}) => {
//   return (
//     <Link className="exercise-card" to={`/exercise/${exercise.id}`} sx={{color:'3e2723'}}>
//         <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/> 

//         <Stack direction="row">
//             <Button sx={{ml:'21px',color:'#fff',background:'#ffa9a9',
//              fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
//                 {exercise.bodyPart}

//             </Button>
//             <Button sx={{ml:'21px',color:'#fff',background:'#fcc757',
//              fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
//                 {exercise.target}

//             </Button>
//         </Stack>
//         <Typography mt="11px" pb="10px" textTransform="capitalize"
//       variant="h5" // Adjust the variant to control the size and weight of the text
//       sx={{
//         color: '#ef5350', // Replace with the desired text color
//         fontSize: '20px', // Adjust the font size as needed
//         fontWeight: 'bold', // Adjust the font weight as needed
        
//         // Add more styles as needed, such as fontFamily, textAlign, etc.
//       }}
//     >
//       {exercise.name}
//     </Typography>
//     </Link>
//   )
// }

export default ExerciseCard


