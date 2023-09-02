<<<<<<< Updated upstream
import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={12}>
                    Logo
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#6E7E85',
    color: 'white',
    textAlign: 'center',
    padding: theme.spacing(2),
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      &copy;2023 Group 2-44. All rights reserved.
    </footer>
  );
};

export default Footer;
>>>>>>> Stashed changes
