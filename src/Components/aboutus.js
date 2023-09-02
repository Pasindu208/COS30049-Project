import React from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '83vh',
    marginTop: '10vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  title: {
    color: 'white',
  }
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
      <Typography variant="h4" gutterBottom className={classes.title}>
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
