import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
// import Link from 'https://youtube.com';

const textColor = '#ffffff';
const useStyles = makeStyles((theme) => ({
  navbar: {
    position: 'absolute',
    zIndex: 999,
    width: '100%',
    height: '10vh',
    top: '0px',
    left: '0px',
    backgroundColor: '#6E7E85',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    },
  },
  logo: {
    color: textColor,
    fontSize: '30px',
    margin: theme.spacing(2),
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  navlinks: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  navlink: {
    margin: theme.spacing(1),
    textDecoration: 'none',
    color: textColor,
    border: '1px solid white',
    padding: '10px 20px',
  },
  button: {
    margin: theme.spacing(1),
    border: '2px solid white',
    color: 'white',
    borderRadius: '5px',
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>Logo</div>
      <div className={classes.navlinks}>
        <li ><Button variant="outlined" className={classes.button} >Home</Button></li>
        <li ><Button variant="outlined" className={classes.button} >About</Button></li>
        <li ><Button variant="outlined" className={classes.button} >Submit</Button></li>
        <li ><Button variant="outlined" className={classes.button} >Reports</Button></li>
      </div>
    </div>
  )
}

export default Navbar