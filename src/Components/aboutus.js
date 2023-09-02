// import React from "react";
// import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(3),
//   },
//   card: {
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//   },
// }));

// const GroupMembers = () => {
//   const classes = useStyles();

//   const groupMembers = [
//     { name: "Pasindu Gamage", email: "103819717@student.swin.edu.au" },
//     { name: "Puladitha Silva", email: "104187884@student.swin.edu.au" },
//     {
//       name: "Md Nahidur Rahman Aurnab",
//       email: "103849604@student.swin.edu.au",
//     },
//   ];

//   return (
//     <Container maxWidth="md" className={classes.root}>
//       <Typography variant="h4" gutterBottom>
//         Group 2 - 44
//       </Typography>

//       <Grid container spacing={2}>
//         {groupMembers.map((member, index) => (
//           <Grid item xs={12} md={4} key={index}>
//             <Card className={classes.card}>
//               <CardContent>
//                 <Typography variant="h6">{member.name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {member.email}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default GroupMembers;


import React from 'react';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'; // Import makeStyles from @mui/styles

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

const GroupMembers = () => {
  const classes = useStyles();

  const groupMembers = [
    { name: 'Pasindu Gamage', email: '103819717@student.swin.edu.au' },
    { name: 'Puladitha Silva', email: '104187884@student.swin.edu.au' },
    { name: 'Md Nahidur Rahman Aurnab', email: '103849604@student.swin.edu.au' },
  ];

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Group 2 - 44
      </Typography>

      {groupMembers.map((member, index) => (
        <Card className={classes.card} key={index}>
          <CardContent>
            <Typography variant="h6">{member.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {member.email}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default GroupMembers;
