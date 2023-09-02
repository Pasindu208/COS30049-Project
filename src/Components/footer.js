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